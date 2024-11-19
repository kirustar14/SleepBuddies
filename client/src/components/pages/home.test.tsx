import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";

const links = [
    { text: "Sleep", path: "/sleep" },
    { text: "Meditation", path: "/meditation" },
    { text: "Alarm", path: "/alarm" },
    { text: "Music", path: "/music" },
];

describe("home page directories", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    links.forEach(({ text, path }) => {
        test(`should render the ${text} button`, () => {
            const button = screen.getByText(new RegExp(text, "i"));
            expect(button).toBeInTheDocument();
        });

        test(`should navigate to the ${text} page when the ${text} button is clicked`, async () => {
            const button = screen.getByText(new RegExp(text, "i"));
            await userEvent.click(button);
            expect(window.location.pathname).toBe(path);
        });
    });
});
