 import React, { useState, useEffect } from "react";
 
const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [laps, setLaps] = useState([]);
 
  useEffect(() => {
    let intervalId;
 
    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }
 
    return () => clearInterval(intervalId);
  }, [timerRunning]);
 
  const startTimer = () => {
    setTimerRunning(true);
  };
 
  const stopTimer = () => {
    setTimerRunning(false);
  };
 
  const resetTimer = () => {
    setTime(0);
    setLaps([]);
  };
 
  const lapTimer = () => {
    setLaps([...laps, time]);
  };
 
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const milliseconds = Math.floor(
      (totalSeconds - seconds - minutes * 60) * 100
    );
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };
 
  return (
    <div className="p-10">
      <div className="mb-10">
        <h1>{formatTime(time)}</h1>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="btn btn-outline-primary" onClick={startTimer}>
          Start
        </button>
        <button className="btn btn-outline-warning" onClick={stopTimer}>
          Stop
        </button>
        <button className="btn btn-outline-primary" onClick={resetTimer}>
          Reset
        </button>
        <button className="btn btn-outline-warning" onClick={lapTimer}>
          Lap
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        <ul>
          <h3>Laps:</h3>
          {laps.map((lapTime, index) => (
            <li key={index}>{formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
export default Timer;
 