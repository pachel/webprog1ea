import React from "react";
import "./App.css";
import UserManager from "./components/UserManager";
import Calculator from "./components/calculator";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <div className="App">
        <TicTacToe />
        <Calculator />
    </div>
  );
}

export default App;

