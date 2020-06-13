import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  button: {
    margin: 0,
    position: "absolute",
    top: "1rem",
    right: "1rem",
    backgroundColor: "#4cd3c2",
  },
}));

function Card({ city, removeCity }) {
  const classes = useStyles();
  return (
    <ul>
      <div className="card">
        <Link to={`/${city.id}`}>
          <h4>
            {city.name}, {city.sys.country}
          </h4>
        </Link>
        <div className="weather">
          <h5>{city.weather[0].main}</h5>
          <p>{city.weather[0].description}</p>
        </div>
        <p className="temp"> max temp: {city.main.temp_max}°C</p>
        <p className="temp"> min temp: {city.main.temp_min}°C</p>
        <p>
          location: {city.coord.lon} , {city.coord.lat}
        </p>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => removeCity(city.id)}
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          DEL
        </Button>
      </div>
    </ul>
  );
}

export default Card;
