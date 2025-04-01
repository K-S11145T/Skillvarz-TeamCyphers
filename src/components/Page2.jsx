import React from "react";

const Page2 = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-between bg-black">
      <div className="w-[18vw] h-screen">
        <img
          className="w-full h-full object-cover"
          src="/Page-2/Player2BgRemoved 1 (1).png"
          alt=""
        />
      </div>

      <div className="flex w-[45vw] flex-col">
        <div className="w-full h-fit">
          <img src="/Page-2/Lines (1).png" alt="" />
        </div>

        <div className="w-[45vw] text-center font-orbitron p-5 h-[50vh]">
          <div className="flex items-center gap-5">
            <img
              src="/Page-2/Arrow.svg"
              alt="Arrow"
              className="w-fit h-fit object-contain"
            />

            <h1 className="text-[#C65244] text-5xl">A new creed rises</h1>
          </div>
          <p className="text-zinc-300 mt-5 text-xl">
            Live the intertwined stories of Naoe, an adept shinobi Assassin from
            Iga Province, and Yasuke, the powerful African samurai of historical
            legend. Against the backdrop of the turbulent late Sengoku period,
            this remarkable duo will discover their common destiny as they usher
            in a new era for Japan!
          </p>
        </div>

        <div className="w-full h-fit">
          <img src="/Page-2/Lines (1).png" alt="" />
        </div>
      </div>

      <div className="w-[18vw] h-screen">
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
