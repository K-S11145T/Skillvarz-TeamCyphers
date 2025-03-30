import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full relative min-h-screen'>
      <div className='w-full h-screen relative overflow-hidden'>
        <div className=' w-full'>
          <img className='w-full filter brightness-100 saturate-150 h-full object-cover' src="/Page-1/Untitled.png" alt="" />
        </div>



        <div className='absolute  left-1/2  translate-x-[-50%] w-[30%] min-h-screen bottom-0'>
          <img className='w-full filter brightness-90 saturate-90 object-cover' src="/Page-1/AC_Shadows_Crest_w_Color 2.png" alt="" />
        </div>

        <div className='absolute left-1/2 translate-x-[-50%] w-[30%] min-h-screen bottom-0'>
          <img className='w-full filter brightness-90 saturate-150 object-cover' src="/Page-1/AC_Shadows_Crest_w_Color 1.png" alt="" />
        </div>

        <div className='absolute left-1/2 translate-x-[-50%] w-[45%] h-fit bottom-0'>
          <img className='w-full h-full ' src="/Page-1/imageAC (1).png" alt="" />
        </div>
      </div>
      <div className=' absolute top-0 w-full left-0 px-10 p-5'>
        <div className='flex justify-between'>

          <div className='flex flex-col min-h-screen pb-16 justify-between'>
            <div className='flex gap-1'>
              <h1 className="text-3xl font-hanbai text-white [writing-mode:vertical-rl] [text-orientation:upright]">
                <span className='bg-gradient-to-b from-red-600 via-zinc-800 to-red-600 filter brightness-90 saturate-150 bg-clip-text text-transparent'> as</span>sassins
              </h1>
              <div className='font-orbitron filter brightness-90 saturate-150 text-2xl font-bold'>

                <h1 className='bg-gradient-to-b  from-red-600 to-zinc-800 bg-clip-text text-transparent '>creed</h1>
                <h1 className='bg-gradient-to-b  from-red-600 to-zinc-800 bg-clip-text text-transparent '>Shadows</h1>
              </div>
            </div>

            <div className='w-[13vw] relative border-b-2 py-2 border-red-500 h-[40vh]'>
              <div className='absolute top-[-8%]'>
                <div className='relative w-full h-full'>
                  {/* Your image with the same clip-path */}
                  <div className='relative [clip-path:polygon(0%_0%,95%_0%,100%_5%,100%_100%,5%_100%,0%_95%)] w-full h-full'>
                    <img className='w-full h-full object-cover' src="/Page-1/pixelcut-export.png" alt="" />
                  </div>

                  {/* SVG Border - matches exactly your clip-path */}
                  <svg
                    className='absolute top-0 left-0 w-full stroke-red-700 h-full pointer-events-none'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                  >
                    <polygon
                      points='0,0 95,0 100,5 100,100 5,100 0,95'
                      fill='none'

                      strokeWidth='1.5'
                    />
                  </svg>
                </div>
              </div>
              <div className='absolute top-[-2%]'>
                <div className='relative w-full h-full'>
                  {/* Your image with the same clip-path */}
                  <div className='relative [clip-path:polygon(0%_0%,95%_0%,100%_5%,100%_100%,5%_100%,0%_95%)] w-full h-full'>
                    <img className='w-full h-full object-cover' src="/Page-1/pixelcut-export.png" alt="" />
                  </div>

                  {/* SVG Border - matches exactly your clip-path */}
                  <svg
                    className='absolute top-0 left-0 w-full stroke-red-700 h-full pointer-events-none'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                  >
                    <polygon
                      points='0,0 95,0 100,5 100,100 5,100 0,95'
                      fill='none'

                      strokeWidth='1.5'
                    />
                  </svg>
                </div>
              </div>
              <div className='absolute'>
                <div className='relative w-full h-full'>
                  {/* Your image with the same clip-path */}
                  <div className='relative [clip-path:polygon(0%_0%,95%_0%,100%_5%,100%_100%,5%_100%,0%_95%)] w-full h-full'>
                    <img className='w-full h-full object-cover' src="/Page-1/pixelcut-export.png" alt="" />
                  </div>

                  {/* SVG Border - matches exactly your clip-path */}
                  <svg
                    className='absolute top-0 left-0 w-full stroke-red-700 h-full pointer-events-none'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                  >
                    <polygon
                      points='0,0 95,0 100,5 100,100 5,100 0,95'
                      fill='none'

                      strokeWidth='1.5'
                    />
                  </svg>
                </div>
              </div>

            </div>

          </div>


          <div className='flex flex-col justify-between pb-16 min-h-screen'>
            <div className='flex h-[7%] gap-3'>
              <div className='px-3 py-2 border-2  border-red-500 text-red-500 font-orbitron flex items-center'>
                <h1>16d | 8h | 20m | 32s</h1>
              </div>

              {/* JOIN Button */}
              <button className="relative px-5 py-2 text-red-500 font-orbitron  w-[7vw]">
                JOIN
                <svg
                  className="absolute top-0 left-0 stroke-red-500 w-full h-full pointer-events-none"
                  viewBox="0 0 200 60"
                  preserveAspectRatio=' none'

                >
                  <polygon
                    points="0,0 200,0 200,10 200,60 10,60 0,50"

                    strokeWidth="5"
                    fill="transparent"
                  />
                </svg>
              </button>
            </div>

            <div className='flex flex-col gap-4 items-end'>
              <div className=' w-[15vw] h-[40vh] '>
                <img className='w-full h-full object-cover' src="/Page-1/Assassin’s Creed Shadows poster (1).png" alt="" />
              </div>
              <div className='flex items-center gap-5'>

                <button className='bg-red-500 [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2'>
                  PRE ORDER
                </button>
                <button className='h-[6vh] w-[6vh] flex items-center justify-center  text-2xl text-red-600 border-2 border-red-700'>
                  <i class="ri-volume-down-line"></i>
                </button>
              </div>
              <button className='h-[6vh] w-[6vh] flex items-center justify-center  text-2xl text-red-600 border-2 border-red-700'>
                <i class="ri-arrow-down-double-line"></i>
              </button>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default LandingPage