import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PreOrder = ({ handleClose, Order, playSound }) => {
  const line1 = useRef();
  const line2 = useRef();
  const centerDiv = useRef();
  const Img = useRef();
  const modalRef = useRef();


  const handleAnimatedClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Only call handleClose after all animations are complete
        setTimeout(() => {
          handleClose();
        }, 100);
      }
    });

    tl.to([centerDiv.current, Img.current], {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    });

    tl.to(
      line1.current,
      {
        top: "50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      },
      "<"
    );

    tl.to(
      line2.current,
      {
        bottom: "50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      },
      "<"
    );
  };

  useGSAP(() => {
    if (Order) {
      // Reset initial states

      gsap.set([centerDiv.current, Img.current], { opacity: 0 });

      const tl = gsap.timeline();

      tl.from(
        line1.current,
        {
          top: "50%",
          duration: 0.5,
        },
        "line"
      );

      tl.from(
        line2.current,
        {
          bottom: "50%",
          duration: 0.5,
        },
        "line"
      );

      tl.to([centerDiv.current, Img.current], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "+=0.2"); // Small delay after lines finish
    }
  }, [Order]);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-[9999] w-[60vw] -translate-x-1/2 -translate-y-1/2   text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div ref={Img} className="w-full h-full ">
        <img
          className="w-full opacity-80 h-full object-cover"
          src="/Page-1/arcy slides 3-11 1.png"
          alt=""
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div
          ref={line1}
          className="absolute top-0 -translate-y-1/2 w-full h-fit"
        >
          <img src="/Page-2/Lines (1).png" alt="" />
        </div>


        {/* Form Fields */}
        <div ref={centerDiv} className="space-y-4 flex flex-col justify-evenly items-center w-[80%]">
          <button
            onClick={() => {
              playSound();
              handleAnimatedClose();
            }}
            className="absolute top-4 right-5 text-white hover:text-[#E35E4E] cursor-pointer transition text-lg "
          >
            Close
          </button>

          <div className="flex gap-3 items-center justify-center">
            <label className="block mb-1 w-[40vw] font-bold text-2xl ">
              Choose Platform :{" "}
            </label>
            <select className="w-full px-3 py-2 rounded border-2  border-white/50 outline-none ">
              <option className="text-[#E35E4E] font-bold">Steam</option>
              <option className="text-[#E35E4E] font-bold">Epic Games</option>
            </select>
          </div>

          {/* Edition */}

          <div className="flex gap-3 items-center justify-center">
            <label className="block mb-1 w-[40vw] font-bold text-2xl ">
              Select Creed Edition :{" "}
            </label>
            <select className="w-full px-3 py-2 rounded border-2   border-white/50 outline-none ">
              <option className="text-[#E35E4E] font-bold">
                Standard Edition
              </option>
              <option className="text-[#E35E4E] font-bold">
                Deluxe Edition
              </option>
            </select>
          </div>

          {/* Email */}

          <div className="flex gap-3 items-center justify-center">
            <label className="block mb-1 w-[40vw] font-bold text-2xl ">
              Assassin's Email:{" "}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded border-2  border-white/50 outline-none "
            />
          </div>

          {/* Region */}

          <div className="flex gap-3 items-center justify-center">
            <label className="block mb-1 w-[40vw] font-bold text-2xl ">
              Select Region :{" "}
            </label>
            <select className="w-full px-3 py-2 rounded border-2   border-white/50 outline-none ">
              <option className="text-[#E35E4E] font-bold">
                United States
              </option>
              <option className="text-[#E35E4E] font-bold">
                United Kingdom
              </option>
              <option className="text-[#E35E4E] font-bold">Japan</option>
            </select>
          </div>

          {/* Notify + Button */}
          <div className="flex items-center justify-center gap-10 mt-4">
            <div className="flex items-center gap-5">
              <input
                onClick={() => {
                  playSound();
                }}
                type="checkbox"
                id="notify"
                className="appearance-none w-8 h-8 cursor-pointer border-2 border-[#E35E4E]  checked:bg-[#E35E4E] relative"
              />
              <label
                htmlFor="notify"
                onClick={() => {
                  playSound();
                }}
                className="bg-[#E35E4E] text-black cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] text-base font-[orbitron] font-bold px-3 py-2"
              >
                Notify Me
              </label>
            </div>

            <button
              onClick={() => {
                playSound();
              }}
              className="px-6 py-2 bg-transparent border-2 text-[#E35E4E] cursor-pointer border-[#E35E4E] font-bold"
            >
              Submit
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-center text-white/60 mt-4">
            <span className="font-bold">Disclaimer: </span>
            This is a fan-made digital launch website created by @Team Cyphers
            as part of a frontend hackathon project. It is not affiliated with
            or endorsed by Ubisoft or the official Assassin’s Creed franchise.
          </p>
        </div>
        <div
          ref={line2}
          className="absolute bottom-0 translate-y-1/2 w-full h-fit"
        >
          <img src="/Page-2/Lines (1).png" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default PreOrder;
