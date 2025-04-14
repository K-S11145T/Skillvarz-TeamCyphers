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
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const playSound = () => {
    const audio = new Audio("/Page-1/Data 3.wav");
    audio.play();
    audio.volume = 0.3;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('button, a, [data-cursor-hover]')) {
        setIsHoveringClickable(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHoveringClickable(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = ''; // Restore default cursor
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="w-full overflow-x-hidden relative min-h-screen bg-black select-none font-[orbitron]">
        {/* Custom Cursor */}
        <div 
          className={`fixed z-[9999] pointer-events-none transition-transform duration-100 ease-out ${isHoveringClickable ? 'scale-90' : 'scale-100'}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) ${isHoveringClickable ? 'scale(0.9)' : 'scale(1)'}`
          }}
        >
          <img 
            src="/Footer/cursor.png" 
            alt="Custom cursor" 
            className="w-[7vh] h-[7vh] object-contain"
          />
        </div>

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
