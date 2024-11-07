import React from 'react';
import "./css/applet.css"
import "./css/App.css";
import "./css/home.css"

import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/home";
import Sleep from "./components/pages/sleep";
import Meditation from "./components/pages/meditation";
import Alarm from "./components/pages/alarm";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Sleep Buddies</h1>
          </header>
          <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/sleep" Component={Sleep}/>
              <Route path="/meditation" Component={Meditation}/>
              <Route path="/alarm" Component={Alarm}/>
          </Routes>
      </div>
  );
}

export default App;
