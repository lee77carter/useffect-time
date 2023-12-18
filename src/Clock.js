import React, { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  return (
    <p className="clock">
      {time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })}
    </p>
  );
}

export default Clock;
