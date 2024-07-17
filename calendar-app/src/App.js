import "./App.css";
import Event from "./features/calendar/compoment/Event.js";
import input from "./input.json";
import { useEffect, useState } from "react";
import { UiCalendar } from "./features/calendar/compoment/UiCalendar";
import { getGroupsOverlap } from "./utils/UtilsCalendar";
function App() {
  const [events, setEvents] = useState([]);
  const EventSortdeByOverlap = getGroupsOverlap(events);

  useEffect(() => {
    setEvents(input);
    return () => {
      setEvents([]);
    };
  }, [events]);

  return (
    <div className="App">
      <div
        style={{
          top: `0px`,
          position: "absolute",
          zIndex: "1000000000000000",
        }}
      >
        -9H
      </div>
      {EventSortdeByOverlap.map((eventsSorted, mapsIndex) => {
        return (
          <UiCalendar key={mapsIndex}>
            {eventsSorted.map((event, eventIndex) => (
              <Event
                key={eventIndex}
                eventID={event.id}
                start={event.start}
                duration={event.duration}
                colorBackground={"blue"}
              />
            ))}
          </UiCalendar>
        );
      })}

      <div
        style={{
          bottom: "0px",
          position: "fixed",
          zIndex: "1000000000000000",
        }}
      >
        -21H
      </div>
    </div>
  );
}

export default App;
