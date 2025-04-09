import React from "react";
import DecryptedText from "../animations/DecryptedText";

const Footer = ({ playSound }) => {
  return (
    <div
      className="relative min-h-[120vh] "
      style={{
        clipPath: "polygon(0% 0%, 100% -35%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="fixed h-[100vh] w-full bottom-0">
        <div className="w-full  h-screen relative">
          <div className="w-full h-screen flex items-center justify-center text-9xl text-white">
            <img
              className="w-full h-full object-cover"
              src="/Footer/image.png"
              alt=""
            />
          </div>

          <div className="absolute p-10 flex flex-col justify-end  top-0 left-0 w-full h-[100%] text-white">
            <div className="text-[#E35E4E] flex justify-between items-center text-5xl w-full font-bold py-10">
              <h1 className="w-[55%]">
                <DecryptedText
                  text="The Shadows are rising— Will you embrace the creed?"
                  animateOn="view"
                  speed={10}
                  maxIterations={100}
                  revealDirection="center"
                />
              </h1>

              <button
                onClick={() => {
                  playSound();
                }}
                className="bg-[#E35E4E] text-black cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] text-base font-[orbitron] font-bold px-3 py-2"
              >
                PRE ORDER
              </button>
            </div>

            <div className="h-[2px] w-full bg-[#E35E4E] "></div>
            <h1 className="px-5 pt-5">© 2025 Cyphers. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
