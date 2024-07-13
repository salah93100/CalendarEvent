import React from "react";
import "./event.css";
export default function Event({ eventID, start, duration, screenHeight }) {
  const [hours, minutes] = start.split(":");
  const formattedHour = parseInt(hours) % 12 || 12;
  const topPosition = (screenHeight / 12) * formattedHour;

  return (
    <div
      className="container"
      id={eventID}
      style={{
        top: `${topPosition}px`,
        height: "20px",
      }}
    >
      {console.log(hours, minutes, formattedHour)}{" "}
    </div>
  );
}
