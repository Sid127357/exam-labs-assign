import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(7200);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(3600);
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 3600));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };
  return <>{formatTime(timeLeft)}</>;
};

export default CountDownTimer;
