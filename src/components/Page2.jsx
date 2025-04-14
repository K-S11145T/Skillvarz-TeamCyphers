import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import DecryptedText from "../animations/DecryptedText";

const Page2 = () => {
  const leftImg = useRef();
  const rightImg = useRef();
  const parent = useRef();
  const centerDiv = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const headingText = useRef();
  const bodyText = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "top -200%",
        // markers: true,
        scrub: 1.2,
        pin: true,
      },
    });
    tl.from(
      leftImg.current,
      {
        x: "-100%",
        ease: "power4",
        duration: 1.2,
      },
      "same"
    );
    tl.from(
      rightImg.current,
      {
        x: "100%",
        ease: "power4",
        duration: 1.2,
      },
      "same"
    );

    tl.from(
      line1.current,
      {
        top: "50%",
        duration: 1.2,
      },
      "line"
    );

    tl.from(
      line2.current,
      {
        bottom: "50%",
        duration: 1.2,
      },
      "line"
    );

    tl.to(centerDiv.current, {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      duration: 0.8,
    });

    tl.from(
      Array.from(headingText.current.children),
      {
        opacity: 0,
        y: 20,
        stagger: 0.3,
        ease: "power4.out",
        duration: 0.8,
      },
      "text+=0.2"
    );

    tl.from(
      Array.from(bodyText.current.children),
      {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power4.out",
        duration: 0.5,
      },
      "text+=0.5"
    );
  });
  const splitText = (text) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block">
        {word.split("").map((char, j) => (
          <span key={j} className="inline-block">
            {char}
          </span>
        ))}
        <span className="inline-block">&nbsp;</span>
      </span>
    ));
  };
  return (
    <div
      ref={parent}
      className="relative w-full h-[40vh] xl:h-screen flex items-center justify-between bg-black overflow-hidden"
    >
      <div ref={leftImg} className="w-[30%] sm:w-[25%] h-full">
        <img
          className="w-full h-full object-cover"
          src="/Page-2/Player2BgRemoved 1 (1).png"
          alt=""
        />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center w-[55%] lg:w-[45%] ">
        <div
          ref={line1}
          className="absolute top-0 -translate-y-1/2 w-full h-fit"
        >
          <img src="/Page-2/Lines (1).png" alt="" />
        </div>

        <div
          ref={centerDiv}
          className="w-full text-center font-[orbitron] py-2 sm:py-10 h-fit opacity-0 lg:translate-y-10"
        >
          <div
            className="flex items-center justify-center gap-2 lg:gap-5"
            ref={headingText}
          >
            <img
              src="/Page-2/Arrow.svg"
              alt="Arrow"
              className="h-4 w-auto lg:w-fit lg:h-fit object-contain"
            />
            <h1 className="font-orbitron font-semibold text-[#E35E4E] text-base sm:text-2xl lg:text-4xl ">
              <DecryptedText
                text="A new creed rises"
                speed={60}
                maxIterations={100}
                revealDirection="center" // Force center always
                animateOn="view"
                resetOnChange={true}
              />
            </h1>
          </div>
          <div
            className="text-zinc-300 text-xs sm:text-lg lg:mt-5 lg:text-xl "
            ref={bodyText}
          >
            {splitText(
              `Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful African samurai of historical legend. Against the backdrop of the turbulent late Sengoku period, this remarkable duo will discover their common destiny as they usher in a new era for Japan!`
            )}
          </div>
        </div>

        <div
          ref={line2}
          className="absolute bottom-0 translate-y-1/2 w-full h-fit"
        >
          <img src="/Page-2/Lines (1).png" alt="" />
        </div>
      </div>

      <div ref={rightImg} className="w-[30%] sm:w-[25%] h-full">
        <img
          className="w-full h-full object-cover"
          src="/Page-2/Player1BgRemoved 1 (1).png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page2;
