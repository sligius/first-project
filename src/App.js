/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from "react";
import "./App.css";
import { HelloWorld, MyComponent, ToggleButton } from "./1stLab";
import { DinosaurInfo, SearchForm } from "./2ndLab";
import InputOutputField from "./3rdLab";
import DinosaurCards from "./4thLab";

function App() {
  return (
    <div className="App bg-info" style={{ "--bs-bg-opacity": 0.05 }}>
      <SearchForm />
      <DinosaurCards />
    </div>
  );
}

export default App;
