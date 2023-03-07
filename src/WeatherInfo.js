import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description} </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitación: %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
