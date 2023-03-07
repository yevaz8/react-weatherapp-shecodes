import React from "react";

export default function formatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minuts = props.date.getMinuts();
  return (
    <div>
      {day} {hours}: {minuts}
    </div>
  );
}
