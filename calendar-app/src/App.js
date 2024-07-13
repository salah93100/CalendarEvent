import logo from "./logo.svg";
import "./App.css";
import Event from "./Event.js";
import input from "./input.json";
function App() {
  const Height = window.innerHeight;

  return (
    <div className="App">
      <div
        style={{
          top: `0px`,
          position: "absolute",
        }}
      >
        -9H
      </div>

      {input.map((inputEvent) => (
        <Event
          eventID={inputEvent.id}
          start={inputEvent.start}
          duration={inputEvent.duration}
          screenHeight={Height}
        />
      ))}
      <div
        style={{
          top: "800px",
          position: "absolute",
        }}
      >
        -21H
      </div>
    </div>
  );
}

export default App;
