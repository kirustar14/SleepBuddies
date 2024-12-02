import React, { useState, useEffect } from "react";
import "../../css/login.css";
import {checkCorrectPassword} from "../utils/encryption";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [wrongPw, openWrongPwBox] = React.useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let hash = '$2a$10$GENriBFPvrc6TECKVcydouMiMgg1c1TX6TISwqfSsvSP3IRYstgF6'; // TODO fetch hash from db

        if (checkCorrectPassword(password, hash)) {
            console.log("Login Successful");
            // TODO set user as logged in
            // TODO redirect to home
        } else {
            console.log("Login Failed");
            openWrongPwBox(true);
        }
    };

    const handleClose = () => {
        openWrongPwBox(false);
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
                           onChange={e => setUsername(e.target.value)}
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
                           onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button" onClick={handleSubmit}>Log In</button>
            </form>

            <Dialog className="login-dialog"
                open={wrongPw}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Invalid credentials"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Incorrect username or password.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Try again</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LoginPage;
