import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import ReactLenis, { useLenis } from "lenis/react";
import Page5 from "./components/Page5";

import Footer from "./components/Footer";

const App = () => {
  const lenis = useLenis();
  const playSound = () => {
    const audio = new Audio("/Page-1/Data 3.wav");
    audio.play();
    audio.volume = 0.3;
  };
 
  
  return (
    <ReactLenis root>
      <div className="w-full overflow-x-hidden  min-h-screen bg-black select-none font-[orbitron]">
        <LandingPage playSound={playSound} />
        <Page2 playSound={playSound} />
        <Page3 playSound={playSound} />
        <Page4 playSound={playSound} />
        <Page5 playSound={playSound} />
        
        <Footer playSound={playSound} />
      </div>
    </ReactLenis>
  );
};

export default App;
