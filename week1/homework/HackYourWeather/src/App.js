import React from 'react';
import './App.css';
import Cities from './city-weather.json';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>HackYourWeather App</h1>
      </div>
      <div>
        {Cities.map((city) => {
          return (
            <Card
              key={city.id}
              cityName={city.name}
              countryName={city.sys.country}
              weatherMain={city.weather[0].main}
              weatherDesc={city.weather[0].description}
              maxTemp={city.main.temp_max}
              minTemp={city.main.temp_min}
              longitude={city.coord.lon}
              latitude={city.coord.lat}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
