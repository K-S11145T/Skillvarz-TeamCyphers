import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Stack from "./home/Stack";

const LandingPage = () => {
  const parent = useRef();
  const shadowImg = useRef();
  const logoImg = useRef();
  const bgImg = useRef();
  const character = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const imgData = [
    {
      id: 1,
      img: "./Page-1/pixelcut-export.png",
    },
    {
      id: 2,
      img: "./Page-1/pixelcut-export.png",
    },
    {
      id: 3,
      img: "./Page-1/pixelcut-export.png",
    },
    {
      id: 4,
      img: "./Page-1/pixelcut-export.png",
    },
  ];

  useGSAP(() => {
    // ScrollTrigger animations
    gsap.to([shadowImg.current, logoImg.current], {
      y: "-20%",
      ease: "linear",
      scrollTrigger: {
        trigger: parent.current,
        start: "bottom bottom",
        end: "bottom 50%",
        scrub: 1.5,
      },
    });

    gsap.to(character.current, {
      y: "-12%",
      scale: 1.3,
      ease: "linear",
      scrollTrigger: {
        trigger: parent.current,
        start: "bottom bottom",
        end: "bottom 50%",
        scrub: 1.5,
      },
    });
  });

  useEffect(() => {
    gsap.set([shadowImg.current, logoImg.current, character.current], {
      left: "50%",
      xPercent: -50,
      y: 0,
    });
    const moveElements = (e) => {
      const rect = parent.current.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Calculate mouse position as percentage (-0.5 to 0.5)
      const xPercent = (relX / rect.width - 0.5) * 2;
      const yPercent = (relY / rect.height - 0.5) * 2;

      // Subtle movement (adjust these values to change intensity)
      gsap.to(character.current, {
        // scale: 1.05,
        x: xPercent * 18, // ±15px
        y: yPercent * 0, // ±10px
        duration: 0.8,
        ease: "power1.out",
      });

      gsap.to(bgImg.current, {
        x: xPercent * -10, // Opposite direction
        y: yPercent * -5,
        duration: 1.2,
        ease: "power1.out",
      });

      gsap.to(shadowImg.current, {
        x: xPercent * -10, // Opposite direction
        y: yPercent * -5,
        duration: 1.2,
        ease: "power1.out",
      });

      gsap.to(logoImg.current, {
        x: xPercent * 5,
        y: yPercent * 3,
        duration: 1,
        ease: "power1.out",
      });
    };

    const parentEl = parent.current;
    parentEl.addEventListener("mousemove", moveElements);

    return () => {
      parentEl.removeEventListener("mousemove", moveElements);
    };
  }, []);

  return (
    <div ref={parent} className="w-full relative h-screen">
      <div className="w-full h-screen relative overflow-hidden">
        {/* Background image */}
        <div
          ref={bgImg}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[103%] h-[103%] "
        >
          <img
            className="w-full filter brightness-100 saturate-150 h-full object-cover"
            src="/Page-1/Untitled.png"
            alt=""
          />
        </div>

        {/* Centered elements with Tailwind transforms */}
        <div ref={shadowImg} className="absolute w-[30%] min-h-screen bottom-0">
          <img
            className="w-full filter brightness-90 saturate-90 object-cover"
            src="/Page-1/AC_Shadows_Crest_w_Color 2.png"
            alt=""
          />
        </div>

        <div ref={logoImg} className="absolute w-[30%] min-h-screen bottom-0">
          <img
            className="w-full filter brightness-90 saturate-150 object-cover"
            src="/Page-1/AC_Shadows_Crest_w_Color 1.png"
            alt=""
          />
        </div>

        <div ref={character} className="absolute w-[45%] h-fit bottom-0">
          <img className="w-full h-full" src="/Page-1/imageAC (1).png" alt="" />
        </div>
      </div>

      <div className=" absolute top-0 w-full left-0 px-10 p-5">
        <div className="flex justify-between">
          <div className="flex flex-col min-h-screen pb-16 justify-between">
            <div className="flex gap-1">
              <h1 className="text-3xl font-[hanbai] text-white [writing-mode:vertical-rl] [text-orientation:upright]">
                <span className="bg-gradient-to-b from-red-600 via-zinc-800 to-red-600 filter brightness-90 saturate-150 bg-clip-text text-transparent">
                  as
                </span>
                sassins
              </h1>
              <div className="font-[orbitron] filter brightness-90 saturate-150 text-2xl font-bold">
                <h1 className="bg-gradient-to-b  from-red-600 to-zinc-800 bg-clip-text text-transparent ">
                  creed
                </h1>
                <h1 className="bg-gradient-to-b  from-red-600 to-zinc-800 bg-clip-text text-transparent ">
                  Shadows
                </h1>
              </div>
            </div>

            <Stack cardsData={imgData} />
          </div>

          <div className="flex flex-col justify-between pb-16 min-h-screen">
            <div className="flex h-[7%] gap-3">
              <div className="px-3 py-2 border-2  border-red-500 text-red-500 font-[orbitron] flex items-center">
                <h1>16d | 8h | 20m | 32s</h1>
              </div>

              {/* JOIN Button */}
              <button className="relative px-5 py-2 text-red-500 font-[orbitron]  w-[7vw]">
                JOIN
                <svg
                  className="absolute top-0 left-0 stroke-red-500 w-full h-full pointer-events-none"
                  viewBox="0 0 200 60"
                  preserveAspectRatio=" none"
                >
                  <polygon
                    points="0,0 200,0 200,10 200,60 10,60 0,50"
                    strokeWidth="5"
                    fill="transparent"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-4 items-end">
              <div className=" w-[15vw] h-[40vh] ">
                <img
                  className="w-full h-full object-cover"
                  src="/Page-1/Assassin’s Creed Shadows poster (1).png"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-red-500 [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-[orbitron] font-bold px-3 py-2">
                  PRE ORDER
                </button>
                <button className="h-[6vh] w-[6vh] flex items-center justify-center  text-2xl text-red-600 border-2 border-red-700">
                  <i class="ri-volume-down-line"></i>
                </button>
              </div>
              <button className="h-[6vh] w-[6vh] flex items-center justify-center  text-2xl text-red-600 border-2 border-red-700">
                <i class="ri-arrow-down-double-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
