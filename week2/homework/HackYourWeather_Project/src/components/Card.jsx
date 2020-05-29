import React from "react";

function Card({ weatherData }) {
  return (
    <div className="card">
      <h4>
        {weatherData.name}, {weatherData.sys.country}
      </h4>
      <div className="weather">
        <h5>{weatherData.weather[0].main}</h5>
        <p>{weatherData.weather[0].description}</p>
      </div>
      <p className="temp"> max temp: {weatherData.main.temp_max}°C</p>
      <p className="temp"> min temp: {weatherData.main.temp_min}°C</p>
      <p>
        location: {weatherData.coord.lon} , {weatherData.coord.lat}
      </p>
    </div>
  );
}

export default Card;
