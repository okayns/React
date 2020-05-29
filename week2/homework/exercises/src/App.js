import React from "react";
import "./App.css";
import DogGallery from "./components/exercise1/DogGallery";
import RandomJoke from "./components/exercise2/RandomJoke";
import Friend from "./components/exercise3/Friend";

function App() {
  return (
    <div className="App">
      <h2>Exercise1</h2>
      <DogGallery />
      <h2>Exercise2</h2>
      <RandomJoke />
      <h2>Exercise3</h2>
      <Friend />
    </div>
  );
}

export default App;
