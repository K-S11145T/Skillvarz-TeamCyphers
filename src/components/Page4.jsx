import React, { useState, useRef } from "react";
import DecryptedText from "../animations/DecryptedText";
import SplitText from "../animations/SplitText";
import { gsap } from "gsap";

const Page4 = ({ playSound }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stackContainerRef = useRef(null);
  const movingDivRef = useRef(null);
  const isAnimating = useRef(false);

  const playSound2 = () => {
    const audio = new Audio("/Page-1/Data 2.wav");
    audio.play();
    audio.volume = 0.3;
  };

  const data = [
    {
      sr: "01",
      title: "Weapon Design",
      description:
        "A character's soundtrack enhances their presence and emotions. Assassin's Creed Shadows blends shakuhachi flutes, taiko drums, and orchestration for an immersive, historical feel.",
      image: "/Page-4/Dope 1.png",
    },
    {
      sr: "02",
      title: "Developers Interviews",
      description:
        "A character's soundtrack enhances their presence and emotions. Assassin's Creed Shadows blends shakuhachi flutes, taiko drums, and orchestration for an immersive, historical feel.",
      image:
        "https://4kwallpapers.com/images/wallpapers/assassins-creed-4480x2520-16786.jpeg",
    },
    {
      sr: "03",
      title: "Soundtracks",
      description:
        "A character's soundtrack enhances their presence and emotions. Assassin's Creed Shadows blends shakuhachi flutes, taiko drums, and orchestration for an immersive, historical feel.",
      image:
        "https://gaming-cdn.com/images/news/articles/10198/cover/1000x563/ubisoft-posts-a-new-artwork-from-assassin-s-creed-shadows-cover67894625921f9.jpg",
    },
  ];

  const moveRedDivAndChangeImage = (direction, index) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const startX = direction === "forward" ? "0%" : "-200%";
    const endX = direction === "forward" ? "-200%" : "0%";

    gsap.fromTo(
      movingDivRef.current,
      { x: startX },
      {
        x: endX,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: function () {
          if (this.progress() >= 0.5 && activeIndex !== index) {
            setActiveIndex(index);
          }
        },
        onComplete: () => {
          gsap.set(movingDivRef.current, {
            x: direction === "forward" ? "0%" : "-200%",
          });
          isAnimating.current = false;
        },
      }
    );
  };

  const handleClick = (index) => {
    if (index === activeIndex || isAnimating.current) return;
    const direction = "forward";
    moveRedDivAndChangeImage(direction, index);
  };

  return (
    <div className="w-full min-h-screen py-20 bg-gradient-to-b from-[#120202] via-black to-[#0D0000] font-orbitron bg-black overflow-x-hidden">
      <div className="flex p-5 items-center gap-5">
        <img
          src="/Page-2/Arrow.svg"
          alt="Arrow"
          className="w-fit h-fit object-contain"
        />

        <h1 className="text-[#E35E4E] text-5xl">
          <DecryptedText
            text="Behind the scenes"
            speed={50}
            revealDirection="center"
            maxIterations={100}
            animateOn="view"
          />
        </h1>
      </div>

      <div className="w-full relative h-[90vh] bg-zinc-400 overflow-hidden">
        <img
          style={{ objectPosition: "50% 20%" }}
          className="w-full h-full object-cover"
          src={data[activeIndex].image}
          alt=""
        />
        <div className="absolute w-full h-full top-0 left-0">
          <img className="w-full h-full object-cover" src="/Page-4/dotedOverlay.png" alt="" />

        </div>

        <div className="w-full absolute text-white top-0 left-0 flex h-full border-2 border-[#E35E4E]">
          {/* Left panel - fixed width */}
          <div className="w-[25%] flex items-end p-5 border-r-[1px] border-[#E35E4E] h-full z-10">
            <div className="w-full">
              <h1 className="ml-2 text-2xl font-bold">
                <DecryptedText
                  text={data[activeIndex].title}
                  speed={50}
                  maxIterations={100}
                  animateOn={"view"}
                  key={`expanded-title-${activeIndex}`}
                />
              </h1>
              <p className="text-base ml-2 mt-2">
                <SplitText
                  text={data[activeIndex].description}
                  delay={30} // delay between each word
                  duration={0.3} // animation time per word
                  animationFrom={{ opacity: 0, y: 40 }}
                  animationTo={{ opacity: 1, y: 0 }}
                  resetOnChange={true}
                  easing="power3.out"
                  threshold={0.2}
                  rootMargin="-50px"
                  textAlign="start"
                  onLetterAnimationComplete={() => console.log("done ✅")}
                />
              </p>

              <div className="w-full mt-4 h-fit">
                <img
                  className="w-full h-full object-cover"
                  src="/Page-4/Pos2.png"
                  alt=""
                />
              </div>
              <div className="flex text-black items-center justify-evenly mt-4">
                <button
                  onClick={() => {
                    playSound();
                  }}
                  className="bg-[#E35E4E] w-fit [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2"
                >
                  EXPLORE
                </button>
                <button
                  onClick={() => {
                    playSound();
                  }}
                  className="bg-[#E35E4E]  w-fit [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2"
                >
                  STEAM
                </button>
              </div>
            </div>
          </div>

          <div
            ref={movingDivRef}
            className="moving-div w-full absolute h-full bg-[#E35E4E]"
            style={{ left: "100%", zIndex: 99 }}
          ></div>

          {/* Right panel - stack items with animation */}
          <div className="flex-1 relative overflow-hidden">
            <div ref={stackContainerRef} className="w-full h-full flex">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    handleClick(idx);

                    playSound2();
                  }}
                  className="stack-item w-1/3 border-r-[1px]  overflow-hidden group relative border-[#E35E4E] flex flex-col items-center justify-center h-full"
                >
                  <div className="absolute w-full h-full left-0 top-[100%] group-hover:top-0 duration-300 bg-[#E35E4E]"></div>
                  <h1 className="text-xl absolute z-10">{item.title}</h1>
                  <h1 className="text-2xl absolute right-5 bottom-3 font-bold z-10">
                    {item.sr}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
