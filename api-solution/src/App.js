import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GitHubAPI from "./GitHubAPI.js";

function App() {
  return (
    <div className="App">
      <GitHubAPI />
    </div>
  );
}

export default App;
