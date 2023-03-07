import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrentheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            º F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrentheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(fahrentheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            ºC{" "}
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit}>
            º F
          </a>{" "}
        </span>
      </div>
    );
  }
}
