import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import "./Loader.css"; // Import the CSS file for styling

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null); // Reference to the loader container

  useEffect(() => {
    const duration = 11; // Duration in seconds
    const interval = 100; // Update interval in milliseconds
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

  useEffect(() => {
    if (progress >= 100) {
      // Fade out the loader when progress reaches 100%
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1, // Duration of the fade-out animation
        ease: "power2.inOut",
        onComplete: () => {
          // Hide the loader after fade-out
          loaderRef.current.style.display = "none";
        },
      });
    }
  }, [progress]);

  return (
    <div
      ref={loaderRef} // Attach the ref to the loader container
      className="loader-container flex justify-center items-center h-screen w-screen absolute top-0 left-0 "
    >
      {/* Video Background */}
      <video
        className="loader-video"
        autoPlay
        muted
        src={"./Loader.webm"}
      ></video>

      <div className="h-[20vw] w-[60vw] flex justify-center items-center">
        {/* Video Overlay */}
        <div className="video-overlay">
          <h1 className="text-3xl md:text-[4vw] font-[hanbai] tracking-widest text-[#E91516] drop-shadow-xl">
            ASSASSIN'S CREED
          </h1>
          <p className="mt-2 md:mt-[1vw] text-center md:text-[0.8vw]">Shadows</p>
          <div className="flex justify-between items-center md:w-[20vw] mt-[1vw]">
            <h1 className="md:text-[0.8vw] text-[#E35E4E]">Loading...</h1>
            <p className="md:text-[0.8vw] text-[#E35E4E]">
              {Math.round(progress)}%
            </p>
          </div>

          {/* Loading Line */}
          <div className="loading-line w-1/2 md:w-[20vw] h-2 md:h-4">
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
