import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo() {
  return (
    <div className="weatherInfo">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          <FormatedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize"> {weatherData.description} </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
          />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="units">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitación: %</li>
            <li>Wind: {weatherData.wind} km/h</li>
            <li>Humidity: {weatherData.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
