import React from "react";
import WeatherIcon from "./weatherIcon";
import axios from "axios";

export default function ForecastDay(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `eaf223fbefa74d0f073135b8f2023cf9`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecastDay">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecastTemperatures">
            <span className="weatherForecast-tempertaure-max">19º </span>
            <span className="weatherForecast-tempertaure-min">10º </span>
          </div>
        </div>
      </div>
    </div>
  );
}
