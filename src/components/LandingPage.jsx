import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Stack from "./home/Stack";
import Countdown from "./Countdown";
import { motion } from "framer-motion";
import PreOrder from "./PreOrder";
import PreOrderPopup from "./home/PreOrderPopUp";

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
  const [submitted, setSubmitted] = useState(false);

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
      audio.volume = 0.2; // Yaha se Set volume krlo!!
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
      img: "/Page-1/Game4.png",
    },
    {
      id: 2,
      img: "/Page-1/Game3.png",
    },
    {
      id: 3,
      img: "/Page-1/Game2.png",
    },
    {
      id: 4,
      img: "/Page-1/Game1.png",
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
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      // Mobile styles
      gsap.set([shadowImg.current, logoImg.current, bgImg.current], {
        left: "50%",
        top: "60%",
        xPercent: -50,
        yPercent: -50,
        bottom: 0,
      });

      gsap.set(character.current, {
        left: "50%",
        xPercent: -50,
        bottom: 0,
      });
    });

    mm.add("(min-width: 768px)", () => {
      // Desktop styles
      gsap.set([shadowImg.current, logoImg.current, bgImg.current], {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        bottom: 0,
      });

      gsap.set(character.current, {
        left: "50%",
        xPercent: -50,
        bottom: 0,
      });
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
      mm.revert();
      parentEl.removeEventListener("mousemove", moveElements);
    };
  }, []);

  return (
    <div ref={parent} className={`w-full relative h-screen`}>
      {Order && (
        <div className="absolute z-[999]">
          <PreOrder
            setSubmitted={setSubmitted}
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
            src="/Page-1/AC_Background.png"
            alt=""
          />
        </div>

        {/* Centered elements */}
        <div
          ref={shadowImg}
          className="absolute w-[90%] h-[60%] md:w-[80%] md:h-[80%] xl:w-[30%] xl:h-screen bottom-0" // Increased width slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/AC_Shadow.png"
            alt=""
          />
        </div>

        <div
          ref={logoImg}
          className="absolute w-[90%] h-[60%] md:w-[80%] md:h-[80%] xl:w-[30%] xl:h-screen bottom-0" // Increased width slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/AC_Logo.png"
            alt=""
          />
        </div>

        <div
          ref={character}
          className="absolute w-full h-[65%] md:h-[75%] xl:w-[45%] xl:h-fit bottom-0" // Increased width slightly
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-1/AC_Character.png"
            alt=""
          />
        </div>
      </div>

      {/* Left & Right */}

      <div
        className={`absolute top-0 ${
          Order && "opacity-40 pointer-events-none"
        } w-full h-screen left-0 px-4 lg:px-8 py-4 flex items-between justify-between`}
      >
        <div className="w-fit flex flex-col h-full pb-14 sm:pb-30 lg:pb-8 justify-between">
          <div className="flex gap-1">
            <h1 className="tracking-[-0.18em] text-3xl sm:text-5xl font-[hanbai] text-white [writing-mode:vertical-rl] [text-orientation:upright]">
              <span className="bg-gradient-to-b from-red-600 via-zinc-800 to-red-600 filter brightness-90 saturate-150 bg-clip-text text-transparent">
                as
              </span>
              sassins
            </h1>
            <div className="font-[orbitron] filter brightness-90 saturate-150 leading-6 md:leading-none text-xl sm:text-3xl font-bold">
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

        <div className="w-fit h-full flex flex-col sm:justify-end lg:pb-0 pt-13 sm:pt-0">
          <div className="w-fit h-full justify-between sm:justify-end flex flex-col sm:gap-2 items-end">
            <div className="w-fit">
              <img
                className="w-[40vw] md:w-[28vw] lg:w-[16vw] h-auto object-cover"
                src="/Page-1/AC_Shadows_poster_.png"
                alt=""
              />
            </div>
            <div className="w-full flex items-center justify-end gap-2 mb-7 sm:mb-15 lg:mb-0">
              <div className="flex flex-col gap-1 justify-start items-end">
                <button
                  onClick={() => {
                    playSound();
                    setOrder(true);
                  }}
                  className="bg-[#E35E4E] cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-[orbitron] text-xs sm:text-base font-bold px-3 sm:px-4 sm:py-3 md:px-6 py-2"
                >
                  PRE ORDER
                </button>
                {/* JOIN Button */}
                <motion.button
                  onClick={() => {
                    playSound();
                  }}
                  className="sm:opacity-0 relative px-5 py-2 sm:py-3 text-xs sm:text-base w-fit bg-black/30 backdrop-blur-md [clip-path:polygon(0%_0%,95%_0%,100%_0%,100%_100%,5%_100%,0%_80%)] text-[#E35E4E] text-sm font-[orbitron] overflow-hidden hover:text-black cursor-pointer"
                  whileHover="hover"
                >
                  <span className="relative z-10 font-bold pointer-events-auto">
                    JOIN
                  </span>

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
              <div className="flex flex-col justify-center gap-1 items-center opacity-0">
                <motion.button
                  onClick={() => {
                    playSound();
                    toggleAudio();
                  }}
                  className="relative cursor-pointer px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-center text-xl sm:text-2xl text-[#E35E4E] border-2 pointer-events-auto border-[#E35E4E] hover:bg-[#E35E4E] duration-300 hover:text-black"
                  whileHover="hover"
                >
                  {isPlaying ? (
                    <i className="ri-volume-down-line relative z-10"></i>
                  ) : (
                    <i class="ri-volume-off-vibrate-line relative z-10"></i>
                  )}
                </motion.button>

                <motion.button
                  ref={arrowBtn}
                  onClick={() => {
                    playSound();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative cursor-pointer px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-center text-xl sm:text-2xl text-[#E35E4E] hover:bg-[#E35E4E] duration-300 hover:text-black pointer-events-auto border-2 border-[#E35E4E]"
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
      </div>

      {/* Fixed Nav */}
      
      <div
        className={`fixed pointer-events-none top-0 z-[999] ${
          Order && "opacity-40 pointer-events-none"
        } w-full left-0 lg:px-8 p-4 flex justify-end`}
      >
        <div className="flex flex-col justify-between pb-8 h-screen">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 items-end">
            <Countdown />
            {/* JOIN Button */}
            <motion.button
              onClick={() => {
                playSound();
              }}
              className="hidden cursor-pointer sm:block relative px-8 w-fit py-3 bg-black/30 backdrop-blur-md [clip-path:polygon(0%_0%,95%_0%,100%_0%,100%_100%,5%_100%,0%_80%)] pointer-events-auto text-[#E35E4E] font-[orbitron] overflow-hidden hover:text-black "
              whileHover="hover"
            >
              <span className="relative z-10 font-bold ">
                JOIN
              </span>

              <motion.span
                className="absolute cursor-pointer font-bold [clip-path:polygon(0%_0%,95%_0%,100%_0%,100%_100%,5%_100%,0%_80%)] inset-0 bg-[#E35E4E] "
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

          <div className="w-full flex items-center justify-end gap-2 mb-7 sm:mb-15 lg:mb-0 ">
            <div className="flex flex-col gap-1 justify-between items-end opacity-0">
              <button
                onClick={() => {
                  playSound();
                  setOrder(true);
                }}
                className="bg-[#E35E4E] cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-[orbitron] text-xs sm:text-base font-bold px-3 sm:px-4 sm:py-3 md:px-6 py-2"
              >
                PRE ORDER
              </button>
              {/* JOIN Button */}
              <motion.button
                onClick={() => {
                  playSound();
                }}
                className="sm:hidden relative px-5 py-2 sm:py-3 text-xs w-fit bg-black/30 backdrop-blur-md [clip-path:polygon(0%_0%,95%_0%,100%_0%,100%_100%,5%_100%,0%_80%)] text-[#E35E4E] text-sm font-[orbitron] overflow-hidden hover:text-black cursor-pointer"
                whileHover="hover"
              >
                <span className="relative z-10 font-bold pointer-events-auto">
                  JOIN
                </span>

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
            <div className="flex flex-col justify-center gap-1 items-center">
              <motion.button
                onClick={() => {
                  playSound();
                  toggleAudio();
                }}
                className="relative cursor-pointer bg-black/20 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-center text-xl sm:text-2xl text-[#E35E4E] border-2 pointer-events-auto border-[#E35E4E] hover:bg-[#E35E4E] duration-300 hover:text-black"
                whileHover="hover"
              >
                {isPlaying ? (
                  <i className="ri-volume-down-line relative z-10"></i>
                ) : (
                  <i class="ri-volume-off-vibrate-line relative z-10"></i>
                )}
              </motion.button>

              <motion.button
                ref={arrowBtn}
                onClick={() => {
                  playSound();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative bg-black/20 backdrop-blur-md cursor-pointer px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-center text-xl sm:text-2xl text-[#E35E4E] hover:bg-[#E35E4E] duration-300 hover:text-black pointer-events-auto border-2 border-[#E35E4E]"
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

      <PreOrderPopup submitted={submitted} />
    </div>
  );
};

export default LandingPage;
