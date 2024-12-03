import React, { useState, useEffect } from "react";
import "../../css/meditation.css";

// Images for themes
import waterImage from "../../assets/water.webp";
import forestImage from "../../assets/forest.webp";
import nightImage from "../../assets/night.webp";
import sunriseImage from "../../assets/sunrise.webp";
import natureImage from "../../assets/nature.webp";
import calmImage from "../../assets/calm.webp";
import serenityImage from "../../assets/serenity.webp";

type MeditationTheme =
  | "full-body-relaxation"
  | "believe-in-yourself"
  | "time-to-sleep"
  | "mindful-breathing"
  | "positive-energy-boost"
  | "stress-relief"
  | "self-compassion";

const Meditation = () => {
  const [step, setStep] = useState(0);
  const [theme, setTheme] = useState<MeditationTheme | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Sleep Buddies - Meditation";
  }, []);

  const meditationThemes: Record<MeditationTheme, { title: string; content: string }[]> = {
    "full-body-relaxation": [
      { title: "Relax Your Body", content: "Start by lying down comfortably and closing your eyes. Take a deep breath in, and slowly exhale, releasing all tension." },
      { title: "Relax Your Toes", content: "Focus on your toes. Feel them soften and let go of any tension." },
      { title: "Relax Your Legs", content: "Move your focus to your legs. Imagine them sinking into the surface beneath you." },
      { title: "Relax Your Upper Body", content: "Bring your awareness to your stomach, chest, and shoulders. Let them relax and feel lighter with each breath." },
      { title: "Final Full Body Relaxation", content: "Feel your entire body as one relaxed whole. Breathe in peace and exhale any remaining tension." },
    ],
    "believe-in-yourself": [
      { title: "Focus on Your Strengths", content: "Reflect on your accomplishments and strengths. Picture yourself succeeding in your goals." },
      { title: "Let Go of Doubt", content: "Visualize letting go of any doubts or insecurities as though they are drifting away in the wind." },
      { title: "Embrace Your Potential", content: "See a version of yourself who is unstoppable, full of confidence, and belief in your abilities." },
      { title: "Stay Positive", content: "In every challenge, find the opportunity for growth. Focus on the positive in each situation." },
      { title: "Final Affirmation", content: "You are strong, capable, and worthy of success. Keep believing in yourself." },
    ],
    "time-to-sleep": [
      { title: "Prepare for Sleep", content: "Dim the lights and lie comfortably in bed. Let your body relax and unwind." },
      { title: "Release Tension", content: "Starting from your feet, release any tension. Focus on each body part, and let it relax completely." },
      { title: "Breathe Deeply", content: "Take deep, slow breaths in and out. With each exhale, feel yourself sinking deeper into relaxation." },
      { title: "Let Go of the Day", content: "Visualize your thoughts from the day floating away like clouds, leaving you in peaceful stillness." },
      { title: "Sleep Well", content: "As you drift off, imagine yourself in a place of peace and tranquility. Sleep comes easily to you." },
    ],
    "mindful-breathing": [
      { title: "Focus on Your Breath", content: "Take a deep breath in and exhale slowly. Feel the air enter and leave your body." },
      { title: "Breathe Mindfully", content: "With each breath, focus only on the sensation of breathing. Let go of all other thoughts." },
      { title: "Notice the Calm", content: "As you breathe, notice the sense of calmness settling over you with each inhale and exhale." },
      { title: "Be Present", content: "Inhale deeply, and exhale fully. Allow yourself to be fully present in this moment." },
      { title: "Feel Peaceful", content: "With every breath, feel a growing sense of peace filling your body and mind." },
    ],
    "positive-energy-boost": [
      { title: "Feel the Energy", content: "Take a deep breath and imagine a bright, vibrant energy filling your body." },
      { title: "Activate Your Mind", content: "Visualize your mind being filled with positive thoughts and energy." },
      { title: "Energize Your Body", content: "Focus on each body part, feeling a surge of energy revitalizing you." },
      { title: "Embrace Positivity", content: "Visualize a light surrounding you, pushing out negativity and replacing it with vibrant positivity." },
      { title: "Feel Empowered", content: "You are full of energy and confidence. Embrace the positivity within you." },
    ],
    "stress-relief": [
      { title: "Breathe In Calm", content: "Take a deep breath, and as you exhale, feel the tension begin to melt away." },
      { title: "Release the Stress", content: "Visualize the stress leaving your body with each exhale, drifting away like smoke." },
      { title: "Relax Your Mind", content: "Let your thoughts become clear and calm. Focus only on the peaceful feeling you are cultivating." },
      { title: "Let Go of Worry", content: "Release any worries or anxieties. Trust that everything is unfolding as it should." },
      { title: "Final Relaxation", content: "Feel yourself deeply relaxed, free from stress, and at peace." },
    ],
    "self-compassion": [
      { title: "Be Kind to Yourself", content: "Start by acknowledging your efforts. You are doing your best, and that is enough." },
      { title: "Forgive Yourself", content: "Let go of any self-criticism. Offer yourself forgiveness and kindness." },
      { title: "Accept Yourself", content: "Embrace yourself as you are, with all your strengths and imperfections." },
      { title: "Show Yourself Love", content: "Imagine wrapping yourself in a blanket of love and compassion." },
      { title: "You Are Enough", content: "You are worthy of love and kindness. Treat yourself with the compassion you deserve." },
    ],
  };

  const themeBackgrounds: Record<MeditationTheme, string> = {
    "full-body-relaxation": waterImage,
    "believe-in-yourself": forestImage,
    "time-to-sleep": nightImage,
    "mindful-breathing": natureImage,
    "positive-energy-boost": sunriseImage,
    "stress-relief": calmImage,
    "self-compassion": serenityImage,
  };

  const handleNavigation = (direction: "next" | "prev") => {
    if (theme && meditationThemes[theme]) {
      if (direction === "next") {
        if (step < meditationThemes[theme].length) {
          setStep((prevStep) => prevStep + 1);
        }
      } else if (direction === "prev") {
        if (step > 0) {
          setStep((prevStep) => prevStep - 1);
        }
      }
    }
  };

  const handleStartOver = () => {
    setStep(0);
    setTheme("");
  };

  return (
    <div
      className="meditation-container"
      style={{
        backgroundImage: `url(${theme && themeBackgrounds[theme]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hide the theme selector if a theme is selected */}
      {!theme && (
        <div className="theme-selector">
          <h2 style={{ color: "white", fontSize: "2rem" }}>Choose Meditation Type</h2>
          <select value={theme} onChange={(e) => setTheme(e.target.value as MeditationTheme)}>
            <option style={{ color: "white", fontSize: "2rem" }} value="">--Select a Theme--</option>
            {Object.keys(meditationThemes).map((key) => (
              <option key={key} value={key}>
                {key.replace(/-/g, " ")}
              </option>
            ))}
          </select>
        </div>
      )}

      {theme && meditationThemes[theme] && (
        <div className="meditation-content">
          {step < meditationThemes[theme].length ? (
            <>
              <h2 style={{ color: "white", fontSize: "2rem"  }}>{meditationThemes[theme][step].title}</h2>
              <p style={{ color: "white", fontSize: "1.5rem" }}>{meditationThemes[theme][step].content}</p>
              <div className="navigation">
                <button onClick={() => handleNavigation("prev")}>Previous</button>
                <button onClick={() => handleNavigation("next")}>Next</button>
              </div>
            </>
          ) : (
            <div className="final-slide">
              <h2 style={{ color: "white", fontSize: "2rem"  }}>Good Job!</h2>
              <p style={{ color: "white", fontSize: "1.5rem" }}>Congratulations on completing this session!</p>
              <button className="start-over-btn" onClick={handleStartOver}>
                Start Over
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Meditation;
