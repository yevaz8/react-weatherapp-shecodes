import React from "react";
import WeatherIcon from "./weatherIcon";

export default function ForecastDay() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecastDay">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecastTemperatures">
            <span className="weatherForecast-tempertaure-max">19º </span>
            <span className="weatherForecast-tempertaure-min">10º </span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
