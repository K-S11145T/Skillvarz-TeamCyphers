import React from 'react'

const Page5 = () => {
  return (
    <div className='w-full min-h-screen pb-10  font-orbitron bg-black '>
      <div className='flex p-5 items-center gap-5'>
        <img src="/Page-2/Arrow.svg" alt="Arrow" className="w-fit h-fit object-contain" />

        <h1 className='text-[#C65244] text-5xl'>
          Echoes of the Past
        </h1>

      </div>

      <div className='w-full relative h-[90vh] bg-zinc-400'>
        <img style={{ objectPosition: "50% 20%" }} className='w-full h-full object-cover' src="/Page-4/Dope 1.png" alt="" />

        <div className='w-full absolute text-white top-0 left-0  flex h-full border-2 border-[#C65244]'>
          <div className='w-[25%] flex items-end p-5 border-x-[1px] border-[#C65244]  h-full '>
            <div className=' w-full'>
              <h1 className=' ml-2 text-2xl font-bold'>Soundtracks</h1>
              <p className='text-base ml-2 mt-2  '>A character’s soundtrack enhances their presence and emotions. Assassin’s Creed Shadows blends shakuhachi flutes, taiko drums, and orchestration for an immersive, historical feel.</p>

              <div className='w-full mt-4 h-fit'>
                <img className='w-full h-full object-cover' src="/Page-4/Pos2.png" alt="" />
              </div>
              <div className='flex text-black items-center justify-evenly'>
                <button className='bg-red-500 w-fit [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2'>
                  EXPLORE
                </button>
                <button className='bg-red-500 w-fit [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2'>
                  STEAM
                </button>
              </div>


            </div>
          </div>
          
          <div className='w-[25%] border-x-[1px] overflow-hidden group relative border-[#C65244] flex flex-col items-center justify-center h-full '>
            <div className='absolute w-full h-full left-0 top-[100%] group-hover:top-0 duration-300 bg-[#C65244]'> </div>
            <h1 className='text-xl absolute'>Weapon Design</h1>
            <h1 className='text-2xl absolute right-5 bottom-3 font-bold'>01</h1>
          </div>

          <div className='w-[25%] relative overflow-hidden group border-x-[1px] flex flex-col items-center justify-center  border-[#C65244]  h-full '>
            <div className='absolute w-full h-full left-0 top-[100%] group-hover:top-0 duration-300 bg-[#C65244]'> </div>
            <h1 className='text-xl absolute'>Developer Interviews</h1>
            <h1 className='text-2xl absolute right-5 bottom-3 font-bold'>02</h1>
          </div>

          <div className='w-[25%] relative border-x-[1px] group overflow-hidden flex flex-col items-center justify-center border-[#C65244]  h-full '>
            <div className='absolute w-full h-full left-0 top-[100%] group-hover:top-0 duration-300 bg-[#C65244]'> </div>
            <h1 className='text-xl absolute'>Soundtracks</h1>
            <h1 className='text-2xl absolute right-5 bottom-3 font-bold'>03</h1>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Page5