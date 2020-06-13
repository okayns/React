import React from "react";
import "./App.css";
import WeatherPage from "./components/WeatherPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>HackYourWeather App</h1>
      </div>
      <div className='app-body'>
        <WeatherPage />
      </div>
    </div>
  );
}

export default App;
