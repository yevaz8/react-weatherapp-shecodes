import React from "react";
import WeatherIcon from "./weatherIcon";

export default function weatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weatherForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="forecastTemperatures">
        <span className="weatherForecast-tempertaure-max">
          {maxTemperature()}º
        </span>
        <span className="weatherForecast-tempertaure-min">
          {""} {minTemperature()}º
        </span>
      </div>
    </div>
  );
}
