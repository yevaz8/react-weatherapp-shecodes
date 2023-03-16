import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastDay from "./ForecastDay";

import { Triangle } from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultcity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      realfeel: response.data.main.feels_like,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `eaf223fbefa74d0f073135b8f2023cf9`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button type="submit" value="Search" className="button">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <ForecastDay coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <Triangle
        height="100"
        width="100"
        color="black"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
