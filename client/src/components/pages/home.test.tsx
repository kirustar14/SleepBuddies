import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "./home";
import Sleep from "../elements/Sleep";
import Meditation from "../elements/Meditation";
import Alarm from "../elements/Alarm";
import Music from "../elements/Music";

describe("home page buttons", () => {
    test("should go to the sleep page when the sleep button is clicked", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sleep" element={<Sleep />} />
                </Routes>
            </MemoryRouter>
        );

        const sleepButton = screen.getByText(/Sleep/i);
        expect(sleepButton).toBeInTheDocument();

        await userEvent.click(sleepButton);

        expect(screen.getByText(/Sleep/i)).toBeInTheDocument();
    });

    test("should go to the meditation page when the meditation button is clicked", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meditation" element={<Meditation />} />
                </Routes>
            </MemoryRouter>
        );

        const meditationButton = screen.getByText(/Meditation/i);
        expect(meditationButton).toBeInTheDocument();

        await userEvent.click(meditationButton);

        expect(screen.getByText(/Meditation/i)).toBeInTheDocument();
    });

    test("should go to the alarm page when the alarm button is clicked", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/alarm" element={<Alarm />} />
                </Routes>
            </MemoryRouter>
        );

        const alarmButton = screen.getByText(/Alarm/i);
        expect(alarmButton).toBeInTheDocument();

        await userEvent.click(alarmButton);

        expect(screen.getByText(/Alarm/i)).toBeInTheDocument();
    });

    test("should navigate to the Music page when the Music button is clicked", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/music" element={<Music />} />
                </Routes>
            </MemoryRouter>
        );

        const musicButton = screen.getByText(/Music/i);
        expect(musicButton).toBeInTheDocument();

        await userEvent.click(musicButton);

        expect(screen.getByText(/Music/i)).toBeInTheDocument();
    });
});
