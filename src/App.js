import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather defaultcity="Salto" />
          </div>
        </div>
        <footer>
          This projects was coded by Yesica Vázquez and is{" "}
          <a
            href="https://github.com/yevaz8/react-weatherapp-shecodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://master--incomparable-pika-e40f94.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
