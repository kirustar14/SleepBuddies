import React, { useState } from "react";
import "../../css/login.css";

const LoginPage = () => {

    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const handleSubmitEvent = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
            //dispatch action from hooks
        }
        alert("please provide a valid input");
    };

    const handleInput = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form">
                <div className="input-group">
                    <label>Username:</label>
                    <input type="text"
                           id="username"
                           name="username"
                           placeholder="Enter your username"
                           className="input-field"
                           onChange={handleInput}
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password"
                           id="password"
                           name="password"
                           placeholder="Enter your password"
                           className="input-field"
                           onChange={handleInput}
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
