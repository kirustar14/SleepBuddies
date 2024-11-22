import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alarm from './components/elements/Alarm';

describe('Alarm Component', () => {
  test('renders add alarm button', () => {
    render(<Alarm />);
    const addButton = screen.getByText('+');
    expect(addButton).toBeInTheDocument();
  });

  test('opens modal when add button is clicked', () => {
    render(<Alarm />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const modalTitle = screen.getByText('Add New Alarm');
    expect(modalTitle).toBeInTheDocument();
  });

  test('fills in alarm title and saves it', () => {
    render(<Alarm />);
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    const titleInput = screen.getByPlaceholderText('Alarm');
    fireEvent.change(titleInput, { target: { value: 'Morning Alarm' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    const alarmTitle = screen.getByText('Morning Alarm');
    expect(alarmTitle).toBeInTheDocument();
  });

  test('toggles sound state of an alarm', () => {
    render(<Alarm />);
    const toggle = screen.getAllByRole('checkbox')[0];
    expect(toggle).toBeChecked();  // Assume initial state is checked
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });
});
