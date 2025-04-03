import React, { useState, useEffect, useRef } from "react";

const Page3 = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [clicked, setClicked] = useState(false);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrame = useRef(null);
  const targetPosition = useRef({ x: 0, y: 80 });

  useEffect(() => {
    targetPosition.current.x = clicked ? 90 : 0;
    targetPosition.current.y = clicked ? 100 : 80;
  }, [clicked]);

  const updateButtonPosition = () => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const currentX = parseFloat(button.style.left || "160px");
      const currentY = parseFloat(button.style.top || "80px");

      const newX = currentX + (targetPosition.current.x - currentX) * 0.1;
      const newY = currentY + (targetPosition.current.y - currentY) * 0.1;

      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;

      animationFrame.current = requestAnimationFrame(updateButtonPosition);
    }
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      targetPosition.current.x = e.clientX - container.left - 60;
      targetPosition.current.y = e.clientY - container.top - 60;
    }
  };

  const handleMouseLeave = () => {
    targetPosition.current = clicked ? { x: 350, y: 400 } : { x: 0, y: 80 }; // Reset to default position
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateButtonPosition);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  const data = [
    { sr: "01", name: "NAOE", image: "/Page-3/image.png" },
    { sr: "02", name: "FRYE", image: "/Page-3/image.png" },
    { sr: "03", name: "YASUKE", image: "/Page-3/image.png" },
    { sr: "04", name: "ALEXIOS", image: "/Page-3/image.png" },
  ];

  const activeData = data[activeIndex];

  const handleDotClick = (index) => {
    if (!clicked) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20 font-orbitron overflow-hidden bg-gradient-to-b from-black via-black to-[#120202]">
      <div className="flex p-5 items-center gap-5">
        <img
          src="/Page-2/Arrow.svg"
          alt="Arrow"
          className="w-fit h-fit object-contain"
        />
        <h1 className="text-[#C65244] text-5xl">Echoes of the Past</h1>
      </div>

      {/* Only render content for active index */}
      <div className="flex items-center relative p-5 mt-20 min-h-[60vh] justify-center gap-3">
        <div
          className={`w-[50vw] h-full flex flex-col gap-3 justify-center transition-all duration-900 ease-in-out ${
            clicked ? "-translate-x-[120%] opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h1 className="text-[#C65244] text-4xl">
            The Ghost of the Battlefield
          </h1>
          <p className="text-zinc-300 mt-5 text-lg">
            Born into a noble lineage of warriors, {activeData.name}'s fate changed when her
            father was betrayed and slain. Escaping the ruins of her home, she
            survived in the shadows, mastering deception, strategy, and deadly
            arts.
          </p>
          <svg width="100" height="60" viewBox="0 0 100 50">
            <text
              x="0"
              y="50"
              fontSize="50"
              fontWeight="bold"
              stroke="#C65244"
              strokeWidth="1"
              fill="transparent"
            >
              {activeData.sr}
            </text>
          </svg>
          <h1 className="text-white text-3xl">{activeData.name}</h1>
          <p className="text-zinc-300 mt-5 text-lg">
            Trained by rogue masters and mercenaries, {activeData.name} mastered disguise,
            poisons, and swift strikes. Known as 'The Ghost,' she left no trace
            of her victims. Yet, vengeance was never her goal only justice and a
            place to belong!
          </p>

          <button className="bg-red-500 w-fit [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
            EXPLORE
          </button>
        </div>

        <div
          id="container"
          ref={containerRef}
          className={`w-[35vw] relative transition-all duration-900 mt-[-20vh] ${
            clicked ? "-translate-x-[150%]" : "translate-x-0"
          } h-fit`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-3/AC_Shadows_Crest_w_Color 2.png"
            alt=""
          />
          <div className="absolute bottom-14 left-10 w-[80%] h-fit">
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src={activeData.image}
                alt={activeData.name}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgb(0, 0, 0),rgba(0,0,0,1) , rgba(0, 0, 0, 0.13))",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgb(8, 6, 6), rgba(0,0,0,1) , rgba(0, 0, 0, 0))",
                }}
              />
              <svg
                className={`absolute transition-all opacity-0 duration-900 ${
                  clicked && "opacity-[100%]"
                } bottom-10`}
                width="200"
                height="100"
                viewBox="0 0 180 100"
              >
                <text
                  x=""
                  y="80"
                  fontSize="100"
                  fontWeight="bold"
                  stroke="#C65244"
                  strokeWidth="0.5"
                  fill="transparent"
                >
                  {activeData.sr}
                </text>
              </svg>
            </div>
          </div>

          <div
            ref={buttonRef}
            id="button"
            onClick={() => {
              setClicked(!clicked);
            }}
            className="absolute h-[15vh] w-[15vh] flex items-center justify-center rounded-full bg-transparent border-2 border-[#C65244]"
            
          >
            <h1 className="text-sm text-[#C65244]">
              {clicked ? "Revert" : "Tap now"}
            </h1>
          </div>
        </div>

        <div
          className={`w-[50vw] transition-all text-white bottom-15 duration-900 ease-in-out absolute h-[90vh] ${
            clicked
              ? "translate-x-[40%] p-10 opacity-[100%]"
              : "translate-x-[130%] opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[#C65244] font-bold text-3xl">{activeData.name}</h1>
            <h1 className="text-xl">The Ghost of the Battlefield</h1>

            <div className="flex gap-10 text-lg text-zinc-500">
              <h1>Skilled</h1>
              <h1>Graceful</h1>
              <h1>Boisterous</h1>
              <h1>Clumsy</h1>
            </div>
            <div className="flex mt-5 gap-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-[15vh] h-[15vh] rounded-full overflow-hidden border-2 border-[#C65244]">
                  <img
                    className="w-full h-full object-cover"
                    src="/Page-3/Legendary_Katana_-_Bloodshade 1.png"
                    alt="Katana"
                  />
                </div>
                <h1>Katana</h1>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-[15vh] h-[15vh] rounded-full overflow-hidden border-2 border-[#C65244]">
                  <img
                    className="w-full h-full object-cover"
                    src="/Page-3/Legendary_Katana_-_Bloodshade 1.png"
                    alt="Katana"
                  />
                </div>
                <h1>Katana</h1>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-[15vh] h-[15vh] rounded-full overflow-hidden border-2 border-[#C65244]">
                  <img
                    className="w-full h-full object-cover"
                    src="/Page-3/Legendary_Katana_-_Bloodshade 1.png"
                    alt="Katana"
                  />
                </div>
                <h1>Katana</h1>
              </div>
            </div>

            <div className="w-[50vh] ml-20 h-[50vh] mt-5 bg-zinc-900"></div>
          </div>
        </div>
      </div>

      <div className="border-t-2 relative mt-[20vh] flex justify-evenly border-dashed border-[#C65244] w-full">
        {data.map((item, index) => (
          <div
            key={item.sr}
            className={`relative cursor-pointer group ${
              clicked ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={() => handleDotClick(index)}
          >
            <div className="w-[3vh] h-[3vh] rounded-full bg-[#C65244] transform -translate-y-1/2 transition-all duration-300 group-hover:scale-110"></div>

            <div
              className={`
                absolute w-[5vh] h-[5vh] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 
                border-2 border-[#C65244] bg-transparent rounded-full 
                transition-all duration-300 ease-in-out
                ${activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-50"}
              `}
            ></div>

            <div
              className={`
                absolute text-xl top-[-13vh] left-1/2 -translate-x-1/2
                transition-all duration-300
                ${activeIndex === index ? "opacity-100" : "opacity-40"}
              `}
            >
              <h1 className="text-[#C65244]">{item.sr}</h1>
              <h1 className="text-zinc-500">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;