import React from "react";
import "./event.css";
import { convertTimeToTopPosition } from "../../../utils/UtilsCalendar";
import { calculateHeightOfEvent } from "../../../utils/UtilsCalendar";
export default function Event({ eventID, start, duration, colorBackground }) {
  const topPosition = convertTimeToTopPosition(start);
  const eventHeight = calculateHeightOfEvent(duration);

  return (
    <div
      className="container"
      id={eventID}
      style={{
        top: `${topPosition}px`,
        height: `${eventHeight}px`,
        backgroundColor: `${colorBackground}`,
        flex: 1,
        boxSizing: "border-box",
      }}
    >
      event {start}
    </div>
  );
}
