import React from "react";

const Page6 = () => {
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
        <div className=" pt-20 flex gap-10 items-start">
          <div className="flex p-5  items-center gap-5">
            <img
              src="/Page-2/Arrow.svg"
              alt="Arrow"
              className="w-fit h-fit object-contain"
            />

            <h1 className="text-[#C65244] text-5xl">Platforms</h1>
          </div>

          <div className="w-[65%] text-white">
            <p className="text-4xl mt-7">
              Step into the shadows of war, where honor and betrayal shape
              destiny. Will you rise as a master of stealth and steel, or be
              lost in the chaos of a fading era? The land is your
              battleground—embrace the assassin’s path!
            </p>
          </div>
        </div>

        <div className="mt-20 w-[85%] flex border-y-2 border-[#C65244] [clip-path:polygon(0%_0%,99%_0%,100%_10%,100%_100%,1%_100%,0%_90%)]  relative h-[20vh]">
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
              stroke="#C65244" // Your border color
              strokeWidth="0.5%" // Perfectly scales to match border-2
              strokeLinejoin="round" // Clean corners
            />
          </svg>

          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#C65244] text-2xl flex items-center justify-center h-full  border-[#C65244]">
            <h1>Xbox</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#C65244] text-2xl flex items-center justify-center h-full  border-[#C65244]">
            <h1>Ps5</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#C65244] text-2xl flex items-center justify-center h-full  border-[#C65244]">
            <h1>Macos</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#C65244] text-2xl flex items-center justify-center h-full  border-[#C65244]">
            <h1>Ubisoft</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#C65244] text-2xl flex items-center justify-center h-full  border-[#C65244]">
            <h1>Luna</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] font-bold text-[#C65244] text-2xl flex items-center justify-center h-full  border-[#C65244]">
            <h1>Steam</h1>
          </div>
          <div className="border-x-[1px] w-[14.2854%] bg-[#C65244]  font-bold text-xl flex items-center justify-center h-full  border-[#C65244]">
            <img
              src="/Page-5/Epic 5.svg"
              alt="Arrow"
              className="w-[70%] h-fit object-contain"
              style={{ fill: "#C65244" }}
            />
          </div>
        </div>

        <div className="w-full mt-20 flex flex-col gap-20 items-center min-h-screen">
          <div className="w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh] ">
            <img
              className="w-full h-full object-cover"
              src="/Page-5/Yasuke.png"
              alt=""
            />

            <div className="absolute bottom-5 right-0">
              <h1 className="text-3xl w-[40vw] text-white font-bold">
                Become a legendary samurai
              </h1>
              <button className="bg-black mt-2 text-[#C65244]  [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
                PRE ORDER
              </button>
            </div>
          </div>

          <div className="w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh] ">
            <img
              className="w-full h-full object-cover"
              src="/Page-5/Yasuke.png"
              alt=""
            />

            <div className="absolute bottom-5 right-0">
              <h1 className="text-3xl w-[40vw] text-white font-bold">
                Become a legendary samurai
              </h1>
              <button className="bg-black mt-2 text-[#C65244]  [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
                PRE ORDER
              </button>
            </div>
          </div>

          <div className="w-[75%] relative shadow-black shadow-xl [clip-path:polygon(3%_0%,100%_0%,100%_90%,97%_100%,0%_100%,0%_10%)] h-[50vh] ">
            <img
              className="w-full h-full object-cover"
              src="/Page-5/Yasuke.png"
              alt=""
            />

            <div className="absolute bottom-5 right-0">
              <h1 className="text-3xl w-[40vw] text-white font-bold">
                Become a legendary samurai
              </h1>
              <button className="bg-black mt-2 text-[#C65244]  [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
                PRE ORDER
              </button>
            </div>
          </div>

          <h1 className="text-start w-[80%] text-white text-3xl font-bold">
            Step into the shadows. Stay tuned for exclusive content and
            pre-launch surprises. The journey begins soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page6;
