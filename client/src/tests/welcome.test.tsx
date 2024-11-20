import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Welcome from "../components/pages/welcome";
import Login from "../components/pages/login";
import Signup from "../components/pages/signup";

describe("Welcome page button testing", () => {
    test("should go to the login page when the login button is clicked", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </MemoryRouter>
        );

        const loginButton = screen.getByText(/Login/i);
        expect(loginButton).toBeInTheDocument();

        await userEvent.click(loginButton);

        expect(screen.getByText(/Username:/i)).toBeInTheDocument();
        expect(screen.getByText(/Password:/i)).toBeInTheDocument();
    });

    test("should go to the signup page when the signup button is clicked", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </MemoryRouter>
        );

        const signupButton = screen.getByText(/Sign Up/i);
        expect(signupButton).toBeInTheDocument();

        await userEvent.click(signupButton);

        expect(screen.getByText(/Confirm Password:/i)).toBeInTheDocument();
        expect(screen.getByText(/Terms and Services:/i)).toBeInTheDocument();
    });
});
