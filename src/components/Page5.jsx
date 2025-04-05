import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "../animations/DecryptedText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  useEffect(() => {
    const services = gsap.utils.toArray(".image-container");

    services.forEach((service, i) => {
      gsap.set(service, { zIndex: services.length - i }); // Layering

      if (i !== 0) {
        gsap.fromTo(
          service,
          { y: -100 },
          {
            y: 60 * i,
            scrollTrigger: {
              trigger: service,
              start: "top 70%",
              end: "bottom 40%",
              scrub: 0.3,
            },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="w-full relative min-h-screen  font-orbitron bg-black">
      <div className=" w-full">
        <img
          className="w-full filter brightness-100 saturate-150 h-[360vh] object-cover"
          src="/Page-1/Untitled.png"
          alt=""
        />
      </div>
      <div className=" absolute flex flex-col items-center justify-start gap-10 top-0">
        <div className=" pt-20 flex gap-5 items-start">
          <div className="flex p-5 w-[30vw] bg-zinc-30 items-center gap-5">
            <img
              src="/Page-2/Arrow.svg"
              alt="Arrow"
              className="w-fit h-fit object-contain"
            />

            <h1 className="text-[#E35E4E] text-5xl">
              <DecryptedText
                text="Platforms"
                speed={100}
                animateOn="view"
                resetOnView={true} // This makes it animate every time it comes into view
                revealDirection="center"
              />
            </h1>
          </div>

          <div className="w-[65%] text-white">
            <p className="text-3xl mt-7">
              Step into the shadows of war, where honor and betrayal shape
              destiny. Will you rise as a master of stealth and steel, or be
              lost in the chaos of a fading era? The land is your
              battleground—embrace the assassin’s path!
            </p>
          </div>
        </div>

        <div className="mt-20 w-[85%] flex border-y-2 border-[#E35E4E] [clip-path:polygon(0%_0%,99%_0%,100%_10%,100%_100%,1%_100%,0%_90%)]  relative h-[20vh]">
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

          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#E35E4E] text-2xl flex items-center justify-center h-full  border-[#E35E4E]">
            <h1>Xbox</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#E35E4E] text-2xl flex items-center justify-center h-full  border-[#E35E4E]">
            <h1>Ps5</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#E35E4E] text-2xl flex items-center justify-center h-full  border-[#E35E4E]">
            <h1>Macos</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#E35E4E] text-2xl flex items-center justify-center h-full  border-[#E35E4E]">
            <h1>Ubisoft</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#E35E4E] text-2xl flex items-center justify-center h-full  border-[#E35E4E]">
            <h1>Luna</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#E35E4E] text-2xl flex items-center justify-center h-full  border-[#E35E4E]">
            <h1>Steam</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] bg-[#E35E4E]  font-bold text-xl flex items-center justify-center h-full  border-[#E35E4E]">
            <img
              src="/Page-5/Epic 5.svg"
              alt="Arrow"
              className="w-[70%] h-fit object-contain"
              style={{ fill: "#E35E4E" }}
            />
          </div>
        </div>

        <div className="w-full mt-20 relative flex flex-col items-center min-h-screen">
          <div className="image-container w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh]">
            <img
              className="w-full h-full object-cover"
              src="/Page-5/Yasuke.png"
              alt=""
            />
            <div className="absolute bottom-5 right-0">
              <h1 className="text-3xl w-[40vw] text-white font-bold">
                Become a legendary samurai
              </h1>
              <button className="bg-black mt-2 text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
                PRE ORDER
              </button>
            </div>
          </div>

          <div className="image-container w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh]">
            <img
              className="w-full h-full object-cover"
              src="/Page-5/Yasuke.png"
              alt=""
            />
            <div className="absolute bottom-5 right-0">
              <h1 className="text-3xl w-[40vw] text-white font-bold">
                Become a legendary samurai
              </h1>
              <button className="bg-black mt-2 text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
                PRE ORDER
              </button>
            </div>
          </div>

          <div className="image-container w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh]">
            <img
              className="w-full h-full object-cover"
              src="/Page-5/Yasuke.png"
              alt=""
            />
            <div className="absolute bottom-5 right-0">
              <h1 className="text-3xl w-[40vw] text-white font-bold">
                Become a legendary samurai
              </h1>
              <button className="bg-black mt-2 text-[#E35E4E] [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
                PRE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-start bottom-[50vh] translate-x-[-50%] left-1/2 absolute w-[80%] text-white text-3xl font-bold">
        Step into the shadows. Stay tuned for exclusive content and pre-launch
        surprises. The journey begins soon...
      </h1>
    </div>
  );
};

export default Page6;
