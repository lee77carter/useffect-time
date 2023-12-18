import React from "react";
import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = React.useState(true);

  return (
    <div className="App">
      {showClock && <Clock />}
      <button className="clock-toggle" onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide Clock" : "Show clock"}
      </button>
    </div>
  );
}

export default App;
