import React, { useState, useEffect } from "react";
import "../../css/login.css";
import {checkCorrectPassword} from "../utils/encryption";

const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsernameChange = () => {
        setUsername(username);
    };
    const handlePasswordChange = () => {
        setPassword(password);
    };

    const handleSubmit = () => {
        let hash = ''; // TODO fetch hash from db

        if (checkCorrectPassword(password, hash)) {
            // TODO set user as logged in
            // TODO redirect to home
        }
    };

    useEffect(() => {
        document.title = "Login to Sleep Buddies";
    }, []);

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form">
                <div className="input-group">
                    <label>Username:</label>
                    <input type="text"
                           id="username"
                           name="username"
                           value={username}
                           placeholder="Enter your username"
                           className="input-field"
                           onChange={handleUsernameChange}
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password"
                           id="password"
                           name="password"
                           value={password}
                           placeholder="Enter your password"
                           className="input-field"
                           onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="login-button" onSubmit={handleSubmit}>Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
