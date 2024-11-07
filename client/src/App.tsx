import React from 'react';
import "./css/applet.css"
import "./css/App.css";
import "./css/home.css"

import {Route, Routes} from "react-router-dom";
import Login from "./components/pages/login";
import SignUp from "./components/pages/signup";
import Home from "./components/pages/home";
import Sleep from "./components/pages/sleep";
import Meditation from "./components/pages/meditation";
import Alarm from "./components/pages/alarm";
import welcome from './components/pages/welcome';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Sleep Buddies</h1>
          </header>
          <Routes>
              <Route path="/" Component={welcome}/>
              <Route path="/login" Component={Login}/>
              <Route path="/home" Component={Home}/>
              <Route path="/sleep" Component={Sleep}/>
              <Route path="/meditation" Component={Meditation}/>
              <Route path="/alarm" Component={Alarm}/>
          </Routes>
      </div>
  );
}

export default App;
