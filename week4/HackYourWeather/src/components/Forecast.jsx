import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Forecast() {
  const { cityID } = useParams();
  const [forecast, setForecast] = useState();
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const getForecastData = async () => {
      setLoading(true);
      try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
          const data = await response.json();
          setForecast(data.list);
          setCity(data.city);
        } else {
          throw new Error("Error....");
        }
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getForecastData();
  }, [cityID]);

  return (
    <div className=".recharts-wrapper">
      {city.name ? <h2>5 Day Forecast for {city.name}</h2> : <h2>Oooppss</h2>}
      {loading && <p>Loading...</p>}
      {error && <p style={{ fontSize: "2rem" }}>has Error!</p>}
      {forecast && (
        <AreaChart
          width={window.innerWidth / 1.5}
          height={window.innerHeight / 2}
          data={forecast}
          style={{ padding: "2rem" }}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" textAnchor="end" />
          <YAxis dataKey="main.temp_max" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="main.temp_max"
            stroke="#f85f73"
            fill="#f85f73"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="main.temp_min"
            stroke="#07689f"
            fill="#07689f"
            fillOpacity={0.3}
          />
        </AreaChart>
      )}
      <Link to="/">
        <button
          style={{
            padding: ".8rem",
            fontSize: "1.8rem",
            backgroundColor: "#c9d6df",
          }}
        >
          Go Back
        </button>
      </Link>
    </div>
  );
}

export default Forecast;
