import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alarm from "../components/pages/alarm";

jest.mock("../components/elements/AlarmModal", () => ({
  __esModule: true,
  default: ({ handleSaveAlarm, handleCloseModal }: any) => (
    <div data-testid="alarm-modal">
      <button data-testid="save-alarm-button" onClick={handleSaveAlarm}>
        Save Alarm
      </button>
      <button data-testid="close-alarm-modal" onClick={handleCloseModal}>
        Close
      </button>
    </div>
  ),
}));

jest.mock("../components/elements/AlarmRingingModal", () => ({
  __esModule: true,
  default: ({ handleStopAlarm, handleSnoozeAlarm }: any) => (
    <div data-testid="ringing-modal">
      <button data-testid="stop-alarm-button" onClick={handleStopAlarm}>
        Stop Alarm
      </button>
      <button data-testid="snooze-alarm-button" onClick={handleSnoozeAlarm}>
        Snooze Alarm
      </button>
    </div>
  ),
}));

describe("Alarm Component", () => {
  it("renders correctly with no alarms", () => {
    render(<Alarm />);
    expect(screen.getByText("No alarms set. Click + to add an alarm!")).toBeInTheDocument();
  });

  it("opens the modal to add a new alarm", () => {
    render(<Alarm />);
    const addButton = screen.getByText("+");
    fireEvent.click(addButton);
    expect(screen.getByTestId("alarm-modal")).toBeInTheDocument();
  });

  it("adds a new alarm and displays it", async () => {
    render(<Alarm />);
    const addButton = screen.getByText("+");
    fireEvent.click(addButton);

    const saveButton = screen.getByTestId("save-alarm-button");
    fireEvent.click(saveButton);

    await waitFor(() =>
      expect(screen.queryByText("No alarms set. Click + to add an alarm!")).not.toBeInTheDocument()
    );
    expect(screen.getByText("Alarm")).toBeInTheDocument();
  });

  it("deletes an alarm", async () => {
    render(<Alarm />);
    const addButton = screen.getByText("+");
    fireEvent.click(addButton);

    const saveButton = screen.getByTestId("save-alarm-button");
    fireEvent.click(saveButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    await waitFor(() =>
      expect(screen.getByText("No alarms set. Click + to add an alarm!")).toBeInTheDocument()
    );
  });
});
