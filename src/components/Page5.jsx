import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "../animations/DecryptedText";
import SplitText from "../animations/SplitText";
import { Tilt } from "@jdion/tilt-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page6 = ({ playSound }) => {
  const floatRef1 = useRef(null);
  const floatRef2 = useRef(null);
  const floatRef3 = useRef(null);

  // Animation setup for each ref
  useEffect(() => {
    // Setup for first card
    if (floatRef1.current) {
      const img1 = floatRef1.current.querySelector("img");

      floatRef1.current.addEventListener("mouseenter", () => {
        gsap.to(img1, {
          y: -20,
          scale: 1.05,
          duration: 1.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      floatRef1.current.addEventListener("mouseleave", () => {
        gsap.killTweensOf(img1);
        gsap.to(img1, { y: -20, duration: 0.5, ease: "power2.out" });
      });
    }

    // Setup for second card
    if (floatRef2.current) {
      const img2 = floatRef2.current.querySelector("img");

      floatRef2.current.addEventListener("mouseenter", () => {
        gsap.to(img2, {
          y: -20,
          scale: 1.05,
          duration: 1.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      floatRef2.current.addEventListener("mouseleave", () => {
        gsap.killTweensOf(img2);
        gsap.to(img2, { y: -20, duration: 0.5, ease: "power2.out" });
      });
    }

    // Setup for third card
    if (floatRef3.current) {
      const img3 = floatRef3.current.querySelector("img");

      floatRef3.current.addEventListener("mouseenter", () => {
        gsap.to(img3, {
          y: -20,
          scale: 1.05,
          duration: 1.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      floatRef3.current.addEventListener("mouseleave", () => {
        gsap.killTweensOf(img3);
        gsap.to(img3, { y: -20, duration: 0.5, ease: "power2.out" });
      });
    }

    // Cleanup function
    return () => {
      [floatRef1.current, floatRef2.current, floatRef3.current].forEach(
        (el) => {
          if (el) {
            const img = el.querySelector("img");
            el.removeEventListener("mouseenter", () => {});
            el.removeEventListener("mouseleave", () => {});
            gsap.killTweensOf(img);
          }
        }
      );
    };
  }, []);

  const links = [
    {
      link: "Xbox",
      svg: "/Page-5/Xbox.svg",
    },
    {
      link: "Ps5",
      svg: "/Page-5/PS 5.svg",
    },
    {
      link: "Macos",
      svg: "/Page-5/Apple Inc.svg",
    },
    {
      link: "Ubisoft",
      svg: "/Page-5/Ubisoft.svg",
    },
    {
      link: "Luna",
      svg: "/Page-5/Amazon-Luna.svg",
    },
    {
      link: "Steam",
      svg: "/Page-5/Steam Black 1.svg",
    },
    {
      link: "Epic",
      svg: "/Page-5/Epic 5.svg",
    },
  ];

  return (
    <div className="w-full relative min-h-screen font-orbitron">
      <div className="w-full">
        <img
          className="w-full filter brightness-100 saturate-150 h-[340vh] object-cover"
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
                animateOn="view" // This makes it animate every time it comes into view
                revealDirection="center"
              />
            </h1>
          </div>

          <div className="w-full md:w-[65%] text-white sm:text-xl md:text-2xl lg:text-3xl">
            <SplitText
              text="Step into the shadows of war, where honor and betrayal shape destiny. Will you rise as a master of stealth and steel, or be lost in the chaos of a fading era? The land is your battleground—embrace the assassin’s path!"
              delay={30} // delay between each word
              duration={0.3} // animation time per word
              animationFrom={{ opacity: 0, y: 40 }}
              animationTo={{ opacity: 1, y: 0 }}
              resetOnChange={true}
              easing="power3.out"
              threshold={0.2}
              rootMargin="-50px"
              textAlign="start"
            />
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
            {/* Background polygon (transparent) */}
            <polygon
              points="0,0 99,0 100,10 100,100 1,100 0,90"
              fill="transparent"
            />

            {/* Border polygon (matches border-2) */}
            <polygon
              points="0,0 99,0 100,10 100,100 1,100 0,90"
              fill="none"
              stroke="#E35E4E" // Your border color
              strokeWidth="0.5%" // Perfectly scales to match border-2
              strokeLinejoin="round" // Clean corners
            />
          </svg>

          {links.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  playSound();
                }}
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
            );
          })}
        </div>

        <div className="w-full mt-[20vh] relative flex flex-col gap-10 items-center md:min-h-screen">
          <Tilt
            className="w-full z-[11] relative h-full flex group items-center justify-center"
            options={{ scale: 1.07, max: 10 }}
          >
            <div
              ref={floatRef1}
              className="image-container w-full h-[15vh] md:h-[50vh] md:w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-[50] pointer-events-none
              bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]"
              />

              <img
                className="w-full md:h-[150%] translate-y-[-3vh] object-cover"
                src="/Page-5/lastcard.png"
                alt=""
              />
              <img className="absolute top-0 w-full h-full" src="/Page-5/image.png" alt="" />

              <div className="absolute bottom-5 right-0 px-4 w-[80%] md:w-[45%]">
                <h1 className="text-xl md:text-4xl text-white font-bold">
                  Become a legendary samurai
                </h1>
                <button
                  onClick={() => playSound()}
                  className="bg-black mt-2 cursor-pointer text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold  text-xs px-3 py-2"
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </Tilt>
          <Tilt
            className="w-full z-[10] relative h-full flex items-center justify-center"
            options={{ scale: 1.03, max: 7 }}
          >
            <div
              ref={floatRef2}
              className="image-container w-full h-[15vh] md:h-[50vh] md:w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)]"
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-[50] pointer-events-none
  bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]"
              />

              <img
                className="w-full h-[150%] translate-y-[-3vh] object-cover"
                src="/Page-5/lastcard-1.png"
                alt=""
              />

              <div className="absolute bottom-5 right-0 px-4 w-[80%] md:w-[45%]">
                <h1 className="text-xl md:text-4xl text-white font-bold">
                  Become a legendary samurai
                </h1>
                <button
                  onClick={() => {
                    playSound();
                  }}
                  className="bg-black mt-2 cursor-pointer text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold text-xs px-3 py-2"
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </Tilt>

          <Tilt
            className="w-full z-[9] relative h-full flex items-center justify-center"
            options={{ scale: 1.03, max: 7 }}
          >
            <div
              ref={floatRef3}
              className="image-container w-full h-[15vh] md:h-[50vh] md:w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)]"
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-[50] pointer-events-none
  bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]"
              />

              <img
                className="w-full h-[150%] translate-y-[-3vh] object-cover"
                src="/Page-5/sa.png"
                alt=""
              />

              <div className="absolute bottom-5 right-0 px-4 w-[80%] md:w-[45%]">
                <h1 className="text-xl md:text-4xl text-white font-bold">
                  Become a legendary samurai
                </h1>
                <button
                  onClick={() => {
                    playSound();
                  }}
                  className="bg-black mt-2 cursor-pointer text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold text-xs px-3 py-2"
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <h1 className="text-start bottom-[50vh] translate-x-[-50%] left-1/2 absolute w-[80%] text-white text-3xl font-bold">
        <SplitText
          text="Step into the shadows. Stay tuned for exclusive content and pre-launch surprises. The journey begins soon..."
          delay={30} // delay between each word
          duration={0.5} // animation time per word
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

export default Page6;
