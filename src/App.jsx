import React from "react";
import LandingPage from "./components/LandingPage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import ReactLenis, { useLenis } from "lenis/react";

const App = () => {
  const lenis = useLenis();
  return (
    <ReactLenis root>
      <div className="w-full h-screen bg-red-950 select-none font-[orbitron]">
        <LandingPage />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    </ReactLenis>
  );
};

export default App;
