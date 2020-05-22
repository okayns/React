import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <h4>
        {props.cityName}, {props.countryName}
      </h4>
      <div className='weather'>
        <h5>{props.weatherMain}</h5>
        <p>{props.weatherDesc}</p>
      </div>
      <p> min temp: {props.maxTemp} </p>
      <p> max temp: {props.minTemp} </p>
      <p>
        location: {props.longitutde} , {props.latitude}
      </p>
    </div>
  );
}

export default Card;
