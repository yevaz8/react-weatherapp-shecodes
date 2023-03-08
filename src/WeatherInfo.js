import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature code={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
