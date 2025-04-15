import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);

  // Loader progress logic
  useEffect(() => {
    const duration = 10;
    const interval = 90;
    const increment = 100 / (duration * (1000 / interval));

    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  // GSAP animation logic
  useGSAP(() => {
    if (progress >= 100 && loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        display: "none",
        duration: 1,
        onComplete: () => {
          loaderRef.current.style.display = "none";
        },
      });
    }
  }, [progress]); // Re-run GSAP animation when progress updates

  return (
    <div
      ref={loaderRef}
      className="loader-container flex justify-center items-center h-screen w-full relative"
    >
      {/* Video Background */}
      <video
        className="loader-video"
        autoPlay
        muted
        src={"./Loader.mp4"}
      ></video>

      <div className="h-[20vw] w-[60vw] flex justify-center items-center">
        <div className="video-overlay">
          <h1 className="text-[4vw] font-[hanbai] tracking-widest text-[#E91516] drop-shadow-xl">
            ASSASSIN'S CREED
          </h1>
          <p className="mt-[1vw] text-[0.8vw]">Shadows</p>
          <div className="flex justify-between items-center w-[20vw] mt-[1vw]">
            <h1 className="text-[0.8vw] text-[#E35E4E]">Loading...</h1>
            <p className="text-[0.8vw] text-[#E35E4E]">
              {Math.round(progress)}%
            </p>
          </div>

          {/* Loading Line */}
          <div className="loading-line">
            <div
              className="loading-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
