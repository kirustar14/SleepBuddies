import { useState } from "react";
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons

import "../../css/music.css"; // for styling

// Import the white-noise.mp3 file from the assets folder
import whiteNoise from "../../assets/white-noise.mp3";
import coverPhoto from "../../assets/cover-photo.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // use-sound hook for handling the audio playback
  const [play, { pause, stop }] = useSound(whiteNoise, { volume: 0.5, loop: true });

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();  // Pause the sound
    } else {
      play();  // Play the sound
    }
    setIsPlaying(!isPlaying);  // Toggle the state
  };

  const nextSong = () => {
    stop();  // Stop the current track
    play();  // Start playing again (or change to next track if applicable)
  };

  const prevSong = () => {
    stop();  // Stop the current track
    play();  // Start playing again (or change to previous track if applicable)
  };

  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img className="musicCover" src={coverPhoto} alt="Music cover" />      <div>
        <h3 className="title">White Noise</h3>
        <p className="subTitle"> Soothing Sounds </p>
      </div>
      <div>
        <button className="playButton" onClick={prevSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>

        {!isPlaying ? (
          <button className="playButton" onClick={togglePlayPause}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={togglePlayPause}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}

        <button className="playButton" onClick={nextSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
