import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MusicPlayer from './components/pages/music'; // Import the MusicPlayer component
import useSound from 'use-sound'; // Mock the use-sound hook

// Mocking the `use-sound` hook
jest.mock('use-sound', () => jest.fn());

describe('MusicPlayer Component', () => {
  beforeEach(() => {
    // Mock the use-sound hook to return dummy play, pause, and stop functions
    (useSound as jest.Mock).mockReturnValue([
      jest.fn(), // play function
      { pause: jest.fn(), stop: jest.fn() }, // pause and stop functions
    ]);
  });

  test('renders the component correctly', () => {
    render(<MusicPlayer />);
    
    // Check for static elements like title and cover image
    expect(screen.getByText(/Playing Now/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Music cover/i)).toBeInTheDocument();
    expect(screen.getByText(/White Noise/i)).toBeInTheDocument();
    
    // Check if the select dropdown is rendered
    expect(screen.getByLabelText(/Choose White Noise/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    
    // Check for the play button
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('play/pause button toggles correctly', async () => {
    render(<MusicPlayer />);
    
    const playButton = screen.getByRole('button', {
      name: /play/i,
    });
    const pauseButton = screen.getByRole('button', {
      name: /pause/i,
    });
    
    // Initially, it should show the play button
    expect(playButton).toBeInTheDocument();
    
    // Simulate play button click
    fireEvent.click(playButton);

    // Now the pause button should be rendered after play is triggered
    await waitFor(() => expect(pauseButton).toBeInTheDocument());
    
    // Simulate pause button click
    fireEvent.click(pauseButton);

    // Now it should revert back to the play button
    await waitFor(() => expect(playButton).toBeInTheDocument());
  });

  test('sound changes when the selector option is changed', async () => {
    render(<MusicPlayer />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'rain-sound.mp3' } });

    // Check if the sound is updated correctly in the state (in the mock)
    expect(useSound).toHaveBeenCalledWith('rain-sound.mp3', expect.any(Object));
  });

  test('skip next and previous buttons are rendered and clickable', () => {
    render(<MusicPlayer />);
    
    const prevButton = screen.getByRole('button', {
      name: /skip previous/i,
    });
    const nextButton = screen.getByRole('button', {
      name: /skip next/i,
    });
    
    // Check if both buttons are rendered
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    
    // Check if clicking the buttons does not break the app (since they're mocked to stop)
    fireEvent.click(prevButton);
    fireEvent.click(nextButton);
  });

  test('stops the sound after changing the selection', () => {
    render(<MusicPlayer />);
  
    const selectElement = screen.getByLabelText(/Choose White Noise:/i);
  
    // Simulate changing the sound selection
    fireEvent.change(selectElement, { target: { value: 'rain-sound.mp3' } });
  
    // Ensure the stop function is called
    const stopMock = (useSound as jest.Mock).mock.results[0].value[1].stop;
    expect(stopMock).toHaveBeenCalled();
  });
});
