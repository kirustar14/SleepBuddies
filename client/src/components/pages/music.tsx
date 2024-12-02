import React, { useState, useEffect, useRef } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons

import "../../css/music.css"; // for styling

// Import sound files for white noise options
import whiteNoise from "../../assets/white-noise.mp3";
import rainSound from "../../assets/rain-sound.mp3";
import oceanSound from "../../assets/ocean-sound.mp3";
import forestSound from "../../assets/forest-sound.mp3";
import coverPhoto from "../../assets/cover-photo.jpg";

const sounds = [
  { name: "White Noise", file: whiteNoise },
  { name: "Rain", file: rainSound },
  { name: "Ocean", file: oceanSound },
  { name: "Forest", file: forestSound },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Play state
  const [currentIndex, setCurrentIndex] = useState(0); // Current track index
  const audioRef = useRef(new Audio(sounds[0].file)); // Ref for audio element

  // Preload sounds to avoid delays
  useEffect(() => {
    sounds.forEach((sound) => {
      const audio = new Audio(sound.file);
      audio.load();
    });
  }, []);

  // Update the audio source whenever the currentIndex changes
  useEffect(() => {
    audioRef.current.src = sounds[currentIndex].file;
    if (isPlaying) {
      audioRef.current.play().catch((error) => console.error("Playback error:", error));
    }
  }, [currentIndex, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Playback error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleSoundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    audioRef.current.pause();
    const newIndex = sounds.findIndex((sound) => sound.file === e.target.value);
    setCurrentIndex(newIndex);
    setIsPlaying(false); // Reset play state
  };

  const stopPlayback = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const playNextTrack = () => {
    stopPlayback(); // Stop current playback
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sounds.length); // Cycle to the next track
  };

  const playPreviousTrack = () => {
    stopPlayback(); // Stop current playback
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sounds.length) % sounds.length); // Cycle to the previous track
  };

  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img className="musicCover" src={coverPhoto} alt="Music cover" />
      <div>
        <h3 className="title">{sounds[currentIndex].name}</h3>
        <p className="subTitle">Soothing Sounds</p>
      </div>
      <div>
        <label htmlFor="soundSelector" style={{ color: "#fff", marginBottom: "1em" }}>
          Choose White Noise:
        </label>
        <select
          id="soundSelector"
          className="whiteNoiseSelector"
          onChange={handleSoundChange}
          value={sounds[currentIndex].file}
          style={{
            display: "block",
            margin: "0.5em auto",
            padding: "0.5em",
            fontSize: "1em",
            borderRadius: "5px",
            border: "1px solid #27AE60",
          }}
        >
          {sounds.map((sound, index) => (
            <option key={index} value={sound.file}>
              {sound.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="playButton" onClick={playPreviousTrack} aria-label="skip previous">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>

        {!isPlaying ? (
          <button className="playButton" onClick={togglePlayPause} aria-label="play">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={togglePlayPause} aria-label="pause">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}

        <button className="playButton" onClick={playNextTrack} aria-label="skip next">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;