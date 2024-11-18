import React, { useState } from "react";
import "../../css/music.css"; // Import the external CSS file

const Music = () => {
  const [isWhiteNoisePlaying, setIsWhiteNoisePlaying] = useState(false);
  const [playlist, setPlaylist] = useState<any[]>([]); // Store the playlist as an array of songs
  const [currentSong, setCurrentSong] = useState<string | null>(null); // Track the current song

  // Handle white noise toggle
  const toggleWhiteNoise = () => {
    setIsWhiteNoisePlaying((prevState) => !prevState);
  };

  // Handle playlist import (JSON)
  const handlePlaylistImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsedPlaylist = JSON.parse(reader.result as string);

          // Map over the playlist to generate Blob URLs for MP3 files
          const updatedPlaylist = parsedPlaylist.map((song: { name: string, url: string }) => {
            // If the URL is a local MP3 file, create a Blob URL
            if (song.url && song.url.endsWith(".mp3")) {
              const songBlob = new Blob([file], { type: "audio/mp3" });
              const songUrl = URL.createObjectURL(songBlob);
              return { ...song, url: songUrl }; // Update the song with the Blob URL
            }
            return song;
          });

          setPlaylist(updatedPlaylist); // Set the updated playlist
        } catch (error) {
          console.error("Error parsing playlist:", error);
        }
      };
      reader.readAsText(file); // Read the file as text
    }
  };

  // Handle song play
  const playSong = (songUrl: string) => {
    setCurrentSong(songUrl); // Set the current song URL to play
  };

  return (
    <div className="music-container">
      <h1 className="music-title">Music</h1>

      {/* Button container */}
      <div className="button-container">
        {/* White Noise Button */}
        <button onClick={toggleWhiteNoise} className="white-noise-button">
          {isWhiteNoisePlaying ? "Stop White Noise" : "Play White Noise"}
        </button>

        {/* Import Playlist Button */}
        <label htmlFor="playlist-upload" className="import-playlist-button">
          Import Playlist
        </label>
        <input
          type="file"
          id="playlist-upload"
          accept=".json,.mp3" // Accept both JSON and MP3 files
          onChange={handlePlaylistImport}
          className="hidden-input"
        />
      </div>

      {/* Playlist Display */}
      {playlist.length > 0 && (
        <div className="playlist">
          <h3>Playlist:</h3>
          <ul>
            {playlist.map((song, index) => (
              <li key={index}>
                <span>{song.name}</span>
                <button onClick={() => playSong(song.url)} className="playlist-button">
                  Play
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Current Song Display */}
      {currentSong && (
        <div className="audio-container">
          <audio controls autoPlay>
            <source src={currentSong} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {/* White Noise Status */}
      {isWhiteNoisePlaying && (
        <p className="white-noise-status">
          White Noise is playing...
        </p>
      )}
    </div>
  );
};

export default Music;
