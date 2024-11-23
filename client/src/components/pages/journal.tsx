import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "../../css/journal.css";

type JournalEntry = {
  id: number;
  mood: string;
  entry: string;
  timestamp: string;
};

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [journalText, setJournalText] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [moodCounts, setMoodCounts] = useState<Record<string, number>>({});

  const moodOptions = [
    { label: "Happy", color: "#ffeb3b", emoji: "😊" },
    { label: "Sad", color: "#2196f3", emoji: "😢" },
    { label: "Angry", color: "#f44336", emoji: "😡" },
    { label: "Neutral", color: "#9e9e9e", emoji: "😐" },
    { label: "Excited", color: "#4caf50", emoji: "😄" },
  ];

  const handleMoodSelection = (mood: string) => {
    setSelectedMood(mood);
  };

  const saveJournal = async () => {
    if (!selectedMood || !journalText) {
      alert("Please select a mood and write a journal entry.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/journal", {
        mood: selectedMood,
        entry: journalText,
      });

      // Update mood counts for the chart
      const newMoodCounts = { ...moodCounts };
      newMoodCounts[selectedMood] = (newMoodCounts[selectedMood] || 0) + 1;
      setMoodCounts(newMoodCounts);

      // Save the entry and reset the form
      setEntries([...entries, response.data]);
      setJournalText("");
      setSelectedMood("");
    } catch (err) {
      console.error("Error saving journal entry", err);
    }
  };

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/journal");
        setEntries(response.data);

        const newMoodCounts: Record<string, number> = {};
        response.data.forEach((entry: any) => {
          const mood = entry.mood;
          newMoodCounts[mood] = (newMoodCounts[mood] || 0) + 1;
        });
        setMoodCounts(newMoodCounts);
      } catch (err) {
        console.error("Error fetching journal entries", err);
      }
    };

    fetchEntries();
  }, [entries]);

  const chartData = [
    ["Mood", "Count"],
    ...Object.entries(moodCounts).map(([mood, count]) => [mood, count]),
  ];

  // Fix: Add type definition for slices
  const slices: Record<number, { offset: number; color: string }> = moodOptions.reduce((acc, mood, index) => {
    acc[index] = { offset: 0.1, color: mood.color };
    return acc;
  }, {} as Record<number, { offset: number; color: string }>);

  return (
    <div className="journal-container">
      <div className="journal-left">
        <h2>Journal Entries</h2>
        <div className="journal-entries">
          {entries.map((entry) => (
            <div key={entry.id} className="entry">
              <p><strong>{entry.mood} {moodOptions.find(m => m.label === entry.mood)?.emoji}</strong></p>
              <p>{entry.entry}</p>
              <p><em>{new Date(entry.timestamp).toLocaleString()}</em></p>
            </div>
          ))}
        </div>
      </div>

      <div className="journal-right">
        <h1>Daily Journal</h1>
        <textarea
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Write your thoughts..."
        />
        <div className="mood-selection">
          {moodOptions.map((mood) => (
            <button
              key={mood.label}
              style={{ backgroundColor: mood.color }}
              onClick={() => handleMoodSelection(mood.label)}
            >
              {mood.emoji} {mood.label}
            </button>
          ))}
        </div>
        <button onClick={saveJournal}>Save Entry</button>

        <div className="mood-chart">
          <Chart
            chartType="PieChart"
            data={chartData}
            options={{
              title: "Mood Distribution",
              is3D: true,
              slices: slices, // Use the slices object here
            }}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Journal;
