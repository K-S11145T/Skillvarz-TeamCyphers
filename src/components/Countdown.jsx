import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-01T00:00:00"); // <-- apna target date daal yaha
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-3 font-bold py-3 w-fit text-sm sm:text-base sm:w-[30vw] lg:w-[16vw] bg-black/30 backdrop-blur-md border-[1px] border-[#E35E4E] text-[#E35E4E] font-[orbitron] flex justify-center items-center">
      <h1>
        {timeLeft.days}d | {timeLeft.hours}h | {timeLeft.minutes}m |{" "}
        {timeLeft.seconds}s
      </h1>
    </div>
  );
};

export default Countdown;
