import React from 'react';
import "./css/applet.css";
import "./css/App.css";
import "./css/home.css";

import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import SignUp from "./components/pages/signup";
import Home from "./components/pages/home";
import Sleep from "./components/pages/sleep";
import Meditation from "./components/pages/meditation";
import Alarm from "./components/pages/alarm";
import Welcome from './components/pages/welcome';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Sleep Buddies</h1>
          </header>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sleep" element={<Sleep />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/alarm" element={<Alarm />} />
          </Routes>
      </div>
  );
}

export default App;
