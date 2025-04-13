import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomDropdown from "./home/CustomDropdown";

const PreOrder = ({ handleClose, Order, playSound, setSubmitted }) => {
  const [platform, setPlatform] = useState("");
  const [edition, setEdition] = useState("");
  const [region, setRegion] = useState("");
  const [email, setEmail] = useState("");

  const line1 = useRef();
  const line2 = useRef();
  const centerDiv = useRef();
  const Img = useRef();

  const handleAnimatedClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          handleClose();
        }, 100);
      },
    });

    tl.to([centerDiv.current, Img.current], {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });

    tl.to(
      line1.current,
      {
        top: "50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "<"
    );

    tl.to(
      line2.current,
      {
        bottom: "50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "<"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound();

    if (!platform || !edition || !region || !email.trim()) {
      console.log("Please fill all fields");
      return;
    }
    setSubmitted(true);
    handleAnimatedClose();
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

      tl.to(
        [centerDiv.current, Img.current],
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.2"
      ); // Small delay after lines finish
    }
  }, [Order]);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-[9999] w-[60vw] -translate-x-1/2 -translate-y-1/2  text-white"
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
        <form
          ref={centerDiv}
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col justify-evenly items-center w-[80%]"
        >
          <button
            type="button"
            onClick={() => {
              playSound();
              handleAnimatedClose();
            }}
            className="absolute top-4 cursor-pointer right-5 text-white hover:text-[#E35E4E] transition text-lg"
          >
            Close
          </button>

          <div className="w-full flex gap-3 items-center justify-between">
            <label className="font-bold text-2xl ">Choose Platform :</label>
            <CustomDropdown
              options={["Steam", "Epic Games"]}
              onChange={(val) => setPlatform(val)}
            />
          </div>

          <div className="w-full flex gap-3 items-center justify-between">
            <label className="font-bold text-2xl ">
              Select Creed Edition :
            </label>
            <CustomDropdown
              options={["Standard Edition", "Deluxe Edition"]}
              onChange={(val) => setEdition(val)}
            />
          </div>

          <div className="w-full relative flex gap-3 items-center justify-between">
            <label className="font-bold text-2xl ">Assassin's Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 w-[55%] rounded border-1 bg-white/10 border-white/50 outline-none"
              required
            />
          </div>

          <div className="w-full flex gap-3 items-center justify-between">
            <label className="font-bold text-2xl ">Select Region :</label>
            <CustomDropdown
              options={["United States", "United Kingdom"]}
              onChange={(val) => setRegion(val)}
            />
          </div>

          <div className="flex items-center justify-center gap-10 mt-4">
            <div className="flex items-center gap-5">
              <input
                onClick={playSound}
                type="checkbox"
                id="notify"
                className="appearance-none cursor-pointer w-8 h-8 border-2 border-[#E35E4E] checked:bg-[#E35E4E] relative"
              />
              <label
                htmlFor="notify"
                onClick={playSound}
                className="bg-[#E35E4E] text-black cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] text-base font-[orbitron] font-bold px-3 py-2"
              >
                Notify Me
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-transparent border-2 text-[#E35E4E] cursor-pointer border-[#E35E4E] font-bold"
            >
              Submit
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-center text-white/60 mt-4">
            <span className="font-bold">Disclaimer: </span>
            This is a fan-made digital launch website created by @Team
            Cyphers...
          </p>
        </form>
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
