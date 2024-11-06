import React from 'react';
import "./css/App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./elements/pages/home";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Sleep Buddies</h1>
          </header>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </div>
  );
}

export default App;
