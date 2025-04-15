import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "../animations/DecryptedText";
import SplitText from "../animations/SplitText";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page5 = ({ playSound }) => {
  // Create refs for each card
  const floatRefs = [
    useRef(null), // Card 1
    useRef(null), // Card 2
    useRef(null)  // Card 3
  ];

  // Animation setup for each ref
  useEffect(() => {
    floatRefs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      const img = el.querySelector("img");

      const handleEnter = () => {
        gsap.to(img, {
          y: -20,
          scale: 1.05,
          duration: 1.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      };

      const handleLeave = () => {
        gsap.killTweensOf(img);
        gsap.to(img, { 
          y: -20, 
          scale: 1,
          duration: 0.5, 
          ease: "power2.out" 
        });
      };

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);

      // Cleanup
      return () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        gsap.killTweensOf(img);
      };
    });
  }, []);

  const links = [
    { link: "Xbox", svg: "/Page-5/Xbox.svg" },
    { link: "Ps5", svg: "/Page-5/PS 5.svg" },
    { link: "Macos", svg: "/Page-5/Apple Inc.svg" },
    { link: "Ubisoft", svg: "/Page-5/Ubisoft.svg" },
    { link: "Luna", svg: "/Page-5/Amazon-Luna.svg" },
    { link: "Steam", svg: "/Page-5/Steam Black 1.svg" },
    { link: "Epic", svg: "/Page-5/Epic 5.svg" },
  ];

  const imagedata = [
    {
      img1: "/Page-5/lastcard.png",
      text: "Become a legendary samurai",
    },
    {
      img1: "/Page-5/lastcard-1.png",
      text: "Master the art of the blade.",
    },
    {
      img1: "/Page-5/sa.png",
      text: "The legend moves unseen.",
    },
  ];

  return (
    <div className="w-full relative min-h-screen font-orbitron">
      <div className="w-full">
        <img
          className="w-full filter brightness-100 saturate-150 h-[270vh] lg:h-[320vh] object-cover"
          src="/Page-1/AC_Background.png"
          alt=""
        />
      </div>
      <div className="w-full px-4 md:px-8 absolute flex flex-col pt-10 items-center justify-start gap-10 top-0">
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-5 items-start justify-between">
          <div className="flex w-full md:w-[30%] bg-zinc-30 items-center gap-2 md:gap-5">
            <img
              src="/Page-2/Arrow.svg"
              alt="Arrow"
              className="h-4 w-auto lg:w-fit lg:h-fit object-contain"
            />
            <h1 className="text-[#E35E4E] font-semibold leading-none text-lg sm:text-3xl lg:text-5xl">
              <DecryptedText
                text="Platforms"
                speed={100}
                animateOn="view"
                revealDirection="center"
              />
            </h1>
          </div>

          <div className="w-[65%] text-white">
            <p className="text-3xl">
              <SplitText
                text="Step into the shadows of war, where honor and betrayal shape destiny. Will you rise as a master of stealth and steel, or be lost in the chaos of a fading era? The land is your battleground—embrace the assassin's path!"
                delay={30}
                duration={0.3}
                animationFrom={{ opacity: 0, y: 40 }}
                animationTo={{ opacity: 1, y: 0 }}
                resetOnChange={true}
                easing="power3.out"
                threshold={0.2}
                rootMargin="-50px"
                textAlign="start"
              />
            </p>
          </div>
        </div>

        <div className="w-full md:w-[85%] flex border-y-2 border-[#E35E4E] [clip-path:polygon(0%_0%,99%_0%,100%_10%,100%_100%,1%_100%,0%_90%)] relative md:h-[20vh]">
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 99,0 100,10 100,100 1,100 0,90" fill="transparent" />
            <polygon
              points="0,0 99,0 100,10 100,100 1,100 0,90"
              fill="none"
              stroke="#E35E4E"
              strokeWidth="0.5%"
              strokeLinejoin="round"
            />
          </svg>

          {links.map((item, idx) => (
            <div
              key={idx}
              onClick={playSound}
              className="w-[14.2854%] cursor-pointer py-5 px-1 group bg-transparent hover:bg-[#E35E4E] relative flex items-center justify-center h-full border-x border-[#E35E4E]"
            >
              <h1 className="text-[#E35E4E] font-bold text-xs text-center md:text-2xl group-hover:opacity-0 transition duration-300">
                {item.link}
              </h1>
              <img
                src={item.svg}
                alt="Arrow"
                className="md:w-[50%] opacity-0 group-hover:opacity-[1] transition duration-300 absolute h-fit object-contain"
              />
            </div>
          ))}
        </div>

        <div className="w-full mt-[10vh] relative flex flex-col gap-10 items-center md:min-h-screen">
          {imagedata.map((item, idx) => (
   
              <div 
                ref={floatRefs[idx]}
                className="image-container w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh]"
              >
                <img
                  className="w-full translate-y-[-3vh] h-[150%] object-cover"
                  src={item.img1}
                  alt=""
                />
                <img className="absolute top-0" src="/Page-5/image.png" alt="" />
                <div className="w-full h-full absolute top-0 left-0">
                  <img className="w-full h-full object-cover" src="/Footer/FooterOverlay.png" alt="" />
                </div>
                <div className="absolute bottom-5 right-0">
                  <h1 className="text-3xl w-[40vw] text-white font-bold">
                    {item.text}
                  </h1>
                  <button
                    onClick={playSound}
                    className="bg-black mt-2 cursor-pointer text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2"
                  >
                    EXPLORE
                  </button>
                </div>
              </div>

          ))}
        </div>
      </div>
      <h1 className="text-start bottom-[50vh] translate-x-[-50%] left-1/2 absolute w-[90%] lg:[80%] text-white text-lg md:text-lg lg:text-3xl">
        <SplitText
          text="Step into the shadows. Stay tuned for exclusive content and pre-launch surprises. The journey begins soon..."
          delay={30}
          duration={0.5}
          animationFrom={{ opacity: 0, y: 40 }}
          animationTo={{ opacity: 1, y: 0 }}
          resetOnChange={true}
          easing="power3.out"
          threshold={0.2}
          rootMargin="-50px"
          textAlign="start"
        />
      </h1>
    </div>
  );
};

export default Page5;