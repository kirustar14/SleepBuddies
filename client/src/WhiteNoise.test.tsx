import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MusicPlayer from "./components/pages/music"; // Import the MusicPlayer component

// Mock static assets in your test file
jest.mock("../../assets/cover-photo.jpg", () => "mocked-cover-photo.jpg");
jest.mock("../../assets/music-photo.jpg", () => "mocked-music-photo.jpg");

// Mock playlist to use in tests
const whiteNoiseSounds = [
  { name: "White Noise", file: "white-noise.mp3" },
  { name: "Rain", file: "rain-sound.mp3" },
  { name: "Ocean", file: "ocean-sound.mp3" },
  { name: "Forest", file: "forest-sound.mp3" },
];

describe("MusicPlayer Component", () => {
  beforeEach(() => {
    jest.spyOn(window, "Audio").mockImplementation(() => ({
      play: jest.fn(),
      pause: jest.fn(),
      load: jest.fn(),
      src: "",
      currentTime: 0,
    }) as any); // Mock Audio object for testing
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("plays the track when the play button is clicked", () => {
    render(<MusicPlayer />);
    const playButton = screen.getByRole("button", { name: /play/i });
    fireEvent.click(playButton);

    expect(window.Audio.prototype.play).toHaveBeenCalled();
  });

  it("pauses the track when the pause button is clicked", () => {
    render(<MusicPlayer />);
    const playButton = screen.getByRole("button", { name: /play/i });
    fireEvent.click(playButton); // First play the track

    const pauseButton = screen.getByRole("button", { name: /pause/i });
    fireEvent.click(pauseButton);

    expect(window.Audio.prototype.pause).toHaveBeenCalled();
  });

  it("skips to the next track when the next button is clicked", () => {
    render(<MusicPlayer />);
    const nextButton = screen.getByRole("button", { name: /skip next/i });

    fireEvent.click(nextButton);

    const nowPlaying = screen.getByText(/Rain|Ocean|Forest/i); // Matches the next track name
    expect(nowPlaying).toBeInTheDocument();
  });

  it("skips to the previous track when the previous button is clicked", () => {
    render(<MusicPlayer />);

    const previousButton = screen.getByRole("button", { name: /skip previous/i });
    fireEvent.click(previousButton);

    const nowPlaying = screen.getByText(/Forest/i); // Assuming circular playlist logic
    expect(nowPlaying).toBeInTheDocument();
  });

  it("loops back to the last track when skipping previous from the first track", () => {
    render(<MusicPlayer />);

    const previousButton = screen.getByRole("button", { name: /skip previous/i });
    fireEvent.click(previousButton);

    const nowPlaying = screen.getByText(/Forest/i); // Last track in the whiteNoiseSounds
    expect(nowPlaying).toBeInTheDocument();
  });

  it("loops back to the first track when skipping next from the last track", () => {
    render(<MusicPlayer />);

    // Simulate skipping to the last track
    const nextButton = screen.getByRole("button", { name: /skip next/i });
    for (let i = 0; i < whiteNoiseSounds.length; i++) {
      fireEvent.click(nextButton);
    }

    const nowPlaying = screen.getByText(/White Noise/i); // First track in the playlist
    expect(nowPlaying).toBeInTheDocument();
  });
});
