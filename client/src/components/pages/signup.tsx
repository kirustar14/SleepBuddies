import React from "react";
import "../../css/login.css"; // Reuse the same CSS for styling

const SignUpPage = () => {
    return (
        <div className="login-page">
            <h1>Sign Up</h1>
            <form className="login-form">
                <div className="input-group">
                    <label>Username:</label>
                    <input type="text" placeholder="Enter your username" className="input-field" />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" className="input-field" />
                </div>
                <div className="input-group">
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm your password" className="input-field" />
                </div>
                <button type="submit" className="login-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;