import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import ReactLenis, { useLenis } from "lenis/react";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import PreOrder from "./components/PreOrder";

const App = () => {
  const lenis = useLenis();
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

  const playSound = () => {
    console.log("playSound called");
    const audio = new Audio("/sounds/click.mp3"); // Use a relative path
    audio.play();
  };

  // Simulate loader completion after 12 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hiding loader...");
      setIsLoading(false); // Hide loader after 12 seconds
    }, 12000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <ReactLenis root>
      <div className="w-full overflow-x-hidden relative min-h-screen bg-black select-none font-[orbitron]">
        {/* Show Loader or Main Content */}
        {/* {isLoading ? (
          <Loader playSound={playSound} />
        ) : (
          <> */}
            <LandingPage playSound={playSound} />
            <Page2 playSound={playSound} />
            <Page3 playSound={playSound} />
            <Page4 playSound={playSound} />
            <Page5 playSound={playSound} />
            <Footer playSound={playSound} />
          {/* </>
        )} */}
      </div>
    </ReactLenis>
  );
};

export default App;
