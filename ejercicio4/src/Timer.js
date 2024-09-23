import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start timer function
  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      const id = setInterval(() => {
        setTime((prevTime) => {
          let { minutes, seconds } = prevTime;
          seconds++;
          if (seconds === 60) {
            minutes++;
            seconds = 0;
          }
          return { minutes, seconds };
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  // Stop timer function
  const stopTimer = () => {
    setIsActive(false);
    clearInterval(intervalId);
  };

  // Reset timer function
  const resetTimer = () => {
    setIsActive(false);
    clearInterval(intervalId);
    setTime({ minutes: 0, seconds: 0 });
  };

  return (
    <div className="container text-center mt-5">
      <h1>Timer</h1>
      <h2>
        {time.minutes} mins {time.seconds} secs
      </h2>
      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={startTimer}>Start</button>
        <button className="btn btn-danger me-2" onClick={stopTimer}>Stop</button>
        <button className="btn btn-warning" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
