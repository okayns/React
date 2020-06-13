import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Forecast from "./Forecast";

const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function Main() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({
    value: false,
    desc: null,
  });
  const [city, setCity] = useState("");

  const [weatherData, setweatherData] = useState([]);

  const getData = () => {
    setLoading(true);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(apiUrl)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          setError(() => {
            return {
              value: true,
              desc: resp.statusText,
            };
          });
          return resp.json();
        }
      })
      .then((result) => {
        if (result.id) {
          const filteredCities = weatherData.filter(
            // To deal with duplication city value...
            (city) => city.id !== result.id
          );
          setweatherData([result, ...filteredCities]);
          setError(false);
        } else {
          setError(() => {
            return {
              value: true,
              desc: result.message,
            };
          });
        }
      })
      .catch((err) => {
        setError(() => {
          return {
            value: true,
            desc: err.message,
          };
        });
      })
      .finally(setLoading(false));
  };

  const handleSubmit = (event) => {
    getData();
    event.preventDefault();
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleDelete = (id) => {
    const newList = weatherData.filter((city) => city.id !== id);
    setweatherData(newList);
  };

  return (
    <Router>
      <Route exact path="/">
        <div>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            city={city}
          />
          {isLoading && <p>Data is fetching...</p>}
          {error.value && (
            <p style={{ fontSize: "1.4rem", marginTop: "2rem" }}>
              Could not get data because of
              <em>
                {city} {error.desc}
              </em>
              <br /> Refresh the page and try again...(F5)
            </p>
          )}

          {weatherData.map((city) => {
            return <Card key={city.id} city={city} removeCity={handleDelete} />;
          })}
        </div>
      </Route>
      <Route path="/:cityID">
        <Forecast />
      </Route>
    </Router>
  );
}

export default Main;
