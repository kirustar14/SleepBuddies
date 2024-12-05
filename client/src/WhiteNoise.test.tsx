import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MusicPlayer from './components/pages/music'; // Import the MusicPlayer component

// Mock playlist to use in tests
const whiteNoiseSounds = [
  { name: "White Noise", file: "white-noise.mp3" },
  { name: "Rain", file: "rain-sound.mp3" },
  { name: "Ocean", file: "ocean-sound.mp3" },
  { name: "Forest", file: "forest-sound.mp3" },
];

