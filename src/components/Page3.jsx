import React, { useState } from "react";

const Page3 = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default to "03" (index 2)

  const data = [
    { sr: "01", name: "NAOE" },
    { sr: "02", name: "FRYE" },
    { sr: "03", name: "YASUKE" },
    { sr: "04", name: "ALEXIOS" },
  ];
  return (
<<<<<<< HEAD
    <div className="w-full min-h-screen pb-20 pt-10 font-orbitron bg-gradient-to-b from-black via-black to-[#120202]">
=======
    <div className="w-full min-h-screen pb-20 font-orbitron bg-gradient-to-b from-black via-black to-[#120202]">
>>>>>>> features/animation
      <div className="flex p-5 items-center gap-5">
        <img
          src="/Page-2/Arrow.svg"
          alt="Arrow"
          className="w-fit h-fit object-contain"
        />

        <h1 className="text-[#C65244] text-5xl">Echoes of the Past</h1>
      </div>
<<<<<<< HEAD
      <div className="flex items-center p-5 mt-20 h-[80vh] justify-center gap-3">
=======
      <div className="flex items-center p-5 mt-20 min-h-[60vh] justify-center gap-3">
>>>>>>> features/animation
        <div className="w-[50vw] min-h-full flex flex-col gap-3 justify-center ">
          <h1 className="text-[#C65244] text-4xl">
            The Ghost of the Battlefield
          </h1>
<<<<<<< HEAD
=======

>>>>>>> features/animation
          <p className="text-zinc-300 mt-5 text-lg">
            Born into a noble lineage of warriors, Naoe's fate changed when her
            father was betrayed and slain. Escaping the ruins of her home, she
            survived in the shadows, mastering deception, strategy, and deadly
            arts.
          </p>
          <svg width="100" height="60" viewBox="0 0 100 50">
            <text
              x="0"
              y="50"
              fontSize="50"
              fontWeight="bold"
              stroke="#C65244"
              strokeWidth="1"
              fill="transparent"
            >
              03
            </text>
          </svg>
          <h1 className="text-white text-3xl">Naoe The Ghost</h1>
          <p className="text-zinc-300 mt-5 text-lg">
            Trained by rogue masters and mercenaries, Naoe mastered disguise,
            poisons, and swift strikes. Known as 'The Ghost,' she left no trace
            of her victims. Yet, vengeance was never her goal only justice and a
            place to belong !
          </p>

          <button className="bg-red-500 w-fit [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2">
            EXPLORE
          </button>
        </div>
        <div className="w-[35vw] relative h-fit">
          <img
            className="w-full h-full object-cover"
            src="/Page-3/AC_Shadows_Crest_w_Color 2.png"
            alt=""
          />
          <div className="absolute bottom-14 left-10 w-[80%] h-fit">
            <img
              className="w-full h-full object-cover"
              src="/Page-3/image.png"
              alt=""
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgb(0, 0, 0),rgba(0,0,0,1) , rgba(0, 0, 0, 0.13))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgb(8, 6, 6), rgba(0,0,0,1) , rgba(0, 0, 0, 0))",
              }}
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 relative mt-[20vh] flex justify-evenly border-dashed border-[#C65244] w-full">
        {data.map((item, index) => (
          <div
            key={item.sr}
            className="relative cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            {/* Small dot with hover effect */}
            <div className="w-[3vh] h-[3vh] rounded-full bg-[#C65244] transform -translate-y-1/2 transition-all duration-300 group-hover:scale-110"></div>

            {/* Large circle - animated when active */}
            <div
              className={`
              absolute w-[5vh] h-[5vh] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 
              border-2 border-[#C65244] bg-transparent rounded-full 
              transition-all duration-300 ease-in-out
              ${
                activeIndex === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }
            `}
            ></div>

            {/* Text labels with fade effect */}
            <div
              className={`
              absolute text-xl top-[-13vh] left-1/2 -translate-x-1/2
              transition-all duration-300
              ${activeIndex === index ? "opacity-100" : "opacity-40"}
            `}
            >
              <h1 className="text-[#C65244]">{item.sr}</h1>
              <h1 className="text-zinc-500">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
