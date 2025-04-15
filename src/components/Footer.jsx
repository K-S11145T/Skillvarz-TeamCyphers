import React, { useEffect, useRef, useState } from "react";
import DecryptedText from "../animations/DecryptedText";
import PreOrder from "./PreOrder";

const Footer = ({ playSound }) => {
  const [Order, setOrder] = useState(false);
  const scrollPositionRef = useRef(0);
  const bodyStylesRef = useRef({
    overflow: "",
    position: "",
    top: "",
    width: ""
  });

  const handleClose = () => {
    const scrollY = parseInt(document.body.style.top || '0');
    
    // First restore body styles
    document.body.style.position = bodyStylesRef.current.position;
    document.body.style.width = bodyStylesRef.current.width;
    document.body.style.overflow = bodyStylesRef.current.overflow;
    document.body.style.top = bodyStylesRef.current.top;
    
    // Remove the negative scroll position
    window.scrollTo(0, Math.abs(scrollY));
    
    // Finally set Order to false
    setOrder(false);
  };
  useEffect(() => {
    if (Order) {
      // Store current scroll position and lock scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Store original body styles
      bodyStylesRef.current = {
        position: '',
        top: '',
        width: '',
        overflow: ''
      };
    }
  }, [Order]);
  
  useEffect(() => {
    return () => {
      // Cleanup styles when component unmounts
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, []);
  return (
    <div
      className="relative min-h-[120vh]"
      style={{
        clipPath: "polygon(0% 0%, 100% -35%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="fixed h-[100vh] w-full bottom-0">
        {Order && (
          <div className="absolute z-[999]">
            <PreOrder
              playSound={playSound}
              Order={Order}
              handleClose={handleClose}
            />
          </div>
        )}
        <div className={`w-full h-screen ${
          Order && "opacity-40 pointer-events-none"
        } relative`}>
          <div className="w-full h-screen relative flex items-center justify-center text-white">
            <img
              className="w-full h-full object-cover"
              src="/Footer/Footer IMG.png"
              alt="Footer background"
            />
            <div className="w-full h-full absolute top-0 left-0">
              <img className="w-full h-full object-cover" src="/Footer/FooterOverlay.png" alt="" />
            </div>
          </div>

          <div className="absolute p-10 flex flex-col justify-end top-0 left-0 w-full h-[100%] text-white">
            <div className="text-[#E35E4E] text-lg flex flex-col md:flex-row justify-between items-start w-full font-bold py-10">
              <button
                onClick={() => {
                  playSound();
                  setOrder(true);
                }}
                className="bg-[#E35E4E] text-black cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] text-base font-[orbitron] font-bold px-3 lg:px-6 py-2 mb-4 md:mb-0 md:order-2"
              >
                PRE ORDER
              </button>
              <h1 className="w-full md:w-[60%] text-lg md:text-5xl text-left">
                <DecryptedText
                  text="The Shadows are rising— Will you embrace the creed?"
                  animateOn="view"
                  speed={10}
                  maxIterations={100}
                  revealDirection="center"
                />
              </h1>
            </div>

            <div className="h-[1px] lg:h-[2px] w-full bg-[#E35E4E]"></div>
            <h1 className="px-5 pt-4 text-xs lg:text-lg text-center">© 2025 Cyphers. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;