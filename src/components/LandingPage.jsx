import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Stack from "./home/Stack";
import Countdown from "./Countdown";
import { motion } from "framer-motion";
import PreOrder from "./PreOrder";

const LandingPage = ({ playSound }) => {
  const parent = useRef();
  const shadowImg = useRef();
  const logoImg = useRef();
  const bgImg = useRef();
  const character = useRef();
  const arrowBtn = useRef();
  const arrowBtnIcon = useRef();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [Order, setOrder] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClose = () => {
    setOrder(false);
    // Restore scroll position after closing modal
    window.scrollTo(0, scrollPosition);

    // Refresh ScrollTriggers after a small delay to allow state update
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  // In the useEffect for Order
  useEffect(() => {
    if (Order) {
      // Save current scroll position
      setScrollPosition(window.scrollY);

      // Disable scroll without killing triggers
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [Order]);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.05;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio play error:", err);
        });
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  const imgData = [
    {
      id: 1,
      img: "/Page-1/pixelcut-export.png",
    },
    {
      id: 2,
      img: "/Page-1/Game2.png",
    },
    {
      id: 3,
      img: "/Page-1/Game3.png",
    },
    {
      id: 4,
      img: "/Page-1/Game4.png",
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

    gsap.to(arrowBtnIcon.current, {
      rotate: -180,
      ease: "linear",
      scrollTrigger: {
        trigger: parent.current,
        start: "bottom bottom",
        end: "bottom 90%",
        scrub: 1.5,
      },
    });
    gsap.to(bgImg.current, {
      y: "0%",
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
    gsap.set(
      [shadowImg.current, logoImg.current, character.current, bgImg.current],
      {
        left: "50%",
        xPercent: -50,
        bottom: 0,
      }
    );
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
        x: xPercent * 60, // ±15px
        y: yPercent * 0, // ±10px
        duration: 0.8,
        ease: "power1.out",
      });

      gsap.to(bgImg.current, {
        x: xPercent * -20, // Opposite direction
        y: yPercent * -15,
        duration: 1.2,
        ease: "power1.out",
      });

      gsap.to(shadowImg.current, {
        x: xPercent * -20, // Opposite direction
        y: yPercent * -15,
        duration: 1.2,
        ease: "power1.out",
      });

      gsap.to(logoImg.current, {
        x: xPercent * 15,
        y: yPercent * 13,
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
    <div ref={parent} className={`w-full relative h-screen`}>
      {Order && (
        <div className="absolute z-[999]">
          <PreOrder
            playSound={playSound}
            Order={Order}
            handleClose={handleClose}
          />
        </div>
      )}

      <audio
        ref={audioRef}
        src="/Page-1/youtube_-wa3LTEHjLk_audio.ogg"
        loop
        preload="auto"
      />
      <div
        className={`w-full h-screen ${
          Order && "opacity-40"
        } relative overflow-hidden`}
      >
        {/* Background image */}
        <div
          ref={bgImg}
          className="absolute w-full h-[105vh] bottom-0" // Increased height slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/Untitled.png"
            alt=""
          />
        </div>

        {/* Centered elements */}
        <div
          ref={shadowImg}
          className="absolute w-[55%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] min-h-screen bottom-0" // Increased width slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/AC_Shadows_Crest_w_Color 2.png"
            alt=""
          />
        </div>

        <div
          ref={logoImg}
          className="absolute w-[45%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] min-h-screen bottom-0" // Increased width slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/AC_Shadows_Crest_w_Color 1.png"
            alt=""
          />
        </div>

        <div
          ref={character}
          className="absolute w-[75%] sm:w-[65%] md:w-[55%] lg:w-[50%] xl:w-[45%] h-fit bottom-0" // Increased width slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/imageAC (1).png"
            alt=""
          />
        </div>
      </div>

      <div
        className={`absolute top-0 ${
          Order && "opacity-40 pointer-events-none"
        } w-full left-0 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 p-5`}
      >
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col min-h-screen pb-16 justify-between">
            <div className="flex gap-1">
              <h1 className="tracking-[-0.14em] lg:tracking-[-0.18em] 2xl:tracking-[-0.22em] text-3xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-[hanbai] text-white [writing-mode:vertical-rl] [text-orientation:upright]">
                <span className="bg-gradient-to-b from-red-600 via-zinc-800 to-red-600 filter brightness-90 saturate-150 bg-clip-text text-transparent">
                  as
                </span>
                sassins
              </h1>
              <div className="font-[orbitron] filter brightness-90 saturate-150 leading-6 sm:leading-8 md:leading-9 lg:leading-6 xl:leading-8 2xl:leading-8 text-xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-4xl 2xl:text-3xl font-bold">
                <h1 className="bg-gradient-to-b from-red-600 to-zinc-800 bg-clip-text text-transparent">
                  creed
                </h1>
                <h1 className="bg-gradient-to-b from-red-600 to-zinc-800 bg-clip-text text-transparent">
                  Shadows
                </h1>
              </div>
            </div>

            <Stack cardsData={imgData} />
          </div>

          <div className="flex flex-col justify-end pb-16 min-h-screen">
            <div className="flex flex-col gap-2 lg:gap-4 items-end">
              <div className="w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[26vw] xl:w-[22vw] 2xl:w-[20vw] h-[40vh] sm:h-[20vh] md:h-[20vh] lg:h-[46vh] xl:h-[40vh] 2xl:h-[50vh]">
                <img
                  className="w-full h-full object-cover"
                  src="/Page-1/Assassin’s Creed Shadows poster (1).png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-start w-full mb-16 pl-5 lg:pl-4 xl:pl-6 2xl:pl-4">
                <button
                  onClick={() => {
                    playSound();
                    setOrder(true);
                  }}
                  className="bg-[#E35E4E] cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-[orbitron] font-bold px-3 sm:px-6 md:px-6 lg:px-6 xl:px-8 2xl:px-12 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-3 2xl:py-4 lg:mr-10"
                >
                  PRE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed pointer-events-none top-0 z-[999] ${
          Order && "opacity-40 pointer-events-none"
        } w-full left-0 px-10 p-5 flex justify-end`}
      >
        <div className="flex flex-col justify-between pb-12 sm:pb-12 md:pb-12 lg:pb-14 xl:pb-16 2xl:pb-12 lg:pr-4 2xl:pr-10 min-h-screen">
          <div className="flex h-[7%] gap-3">
            <Countdown />
            {/* JOIN Button */}
            <motion.button
              onClick={() => {
                playSound();
              }}
              className="relative px-5 py-2 bg-black/30 backdrop-blur-md [clip-path:polygon(0%_0%,95%_0%,100%_0%,100%_100%,5%_100%,0%_80%)] text-[#E35E4E] font-[orbitron] w-[7vw] sm:w-[8vw] md:w-[8vw] lg:w-[12vw] xl:w-[8vw] 2xl:w-[8vw] overflow-hidden hover:text-black cursor-pointer"
              whileHover="hover"
            >
              <span className="relative z-10 font-bold pointer-events-auto">
                JOIN
              </span>

              <motion.span
                className="absolute font-bold [clip-path:polygon(0%_0%,95%_0%,100%_0%,100%_100%,5%_100%,0%_80%)] inset-0 bg-[#E35E4E] "
                initial={{ width: 0 }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                style={{
                  height: "100%",
                  left: 0,
                  top: 0,
                  position: "absolute",
                  zIndex: 0,
                }}
              />

              {/* SVG Border */}
              <svg
                className="absolute top-0 left-0 stroke-[#E35E4E] w-full h-full pointer-events-none z-20"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 200,0 200,10 200,60 10,60 0,50"
                  strokeWidth="5"
                  fill="transparent"
                />
              </svg>
            </motion.button>
          </div>

          <div className="flex flex-col justify-start h-28 sm:h-26 md:h-28 lg:h-32 xl:h-32 2xl:h-34 gap-4 mr-2 lg:mr-4 xl:mr-6 2xl:mr-2 items-end">
            <motion.button
              onClick={() => {
                playSound();
                toggleAudio();
              }}
              className="relative cursor-pointer sm:mt-0 md:mt-0 lg:mt-0 xl:mt-4 2xl:mt-0 h-[6vh] w-[6vh] lg:h-[7.5vh] lg:w-[7.5vh] xl:h-[6.5vh] xl:w-[6.5vh] 2xl:h-[7vh] 2xl:w-[7vh] flex items-center justify-center text-2xl text-[#E35E4E] border-2 pointer-events-auto border-[#E35E4E] hover:bg-[#E35E4E] duration-300 hover:text-black"
              whileHover="hover"
            >
              {isPlaying ? (
                <i class="ri-volume-off-vibrate-line relative z-10"></i>
              ) : (
                <i className="ri-volume-down-line relative z-10"></i>
              )}
            </motion.button>

            <motion.button
              ref={arrowBtn}
              onClick={() => {
                playSound();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative cursor-pointer h-[6vh] w-[6vh] lg:h-[7.5vh] lg:w-[7.5vh] xl:h-[6.5vh] xl:w-[6.5vh] 2xl:h-[7vh] 2xl:w-[7vh] flex items-center justify-center  text-2xl text-[#E35E4E] hover:bg-[#E35E4E] duration-300 hover:text-black pointer-events-auto border-2 border-[#E35E4E]"
            >
              <i
                ref={arrowBtnIcon}
                className="ri-arrow-down-double-line relative z-10"
              ></i>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
