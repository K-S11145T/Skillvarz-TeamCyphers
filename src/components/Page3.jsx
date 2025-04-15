import React, { useState, useEffect, useRef } from "react";
import DecryptedText from "../animations/DecryptedText";
import BoxElement from "./BoxElement";
import SplitText from "../animations/SplitText";
import gsap from "gsap";

const Page3 = ({ playSound }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrame = useRef(null);
  const targetPosition = useRef({ x: 0, y: 80 });
  const characterImageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (characterImageRef.current) {
      gsap.set(characterImageRef.current, {
        opacity: 0,
        scale: 1.1,
        y: 20,
      });

      gsap.to(characterImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    targetPosition.current.x = clicked ? (isMobile ? 40 : 90) : 0;
    targetPosition.current.y = clicked ? (isMobile ? 60 : 100) : 80;
  }, [clicked, isMobile]);

  const updateButtonPosition = () => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const currentX = parseFloat(button.style.left || "160px");
      const currentY = parseFloat(button.style.top || "80px");

      const newX = currentX + (targetPosition.current.x - currentX) * 0.1;
      const newY = currentY + (targetPosition.current.y - currentY) * 0.1;

      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;

      animationFrame.current = requestAnimationFrame(updateButtonPosition);
    }
  };

  const handleMouseMove = (e) => {
    if (containerRef.current && !isMobile) {
      const container = containerRef.current.getBoundingClientRect();
      targetPosition.current.x = e.clientX - container.left - 60;
      targetPosition.current.y = e.clientY - container.top - 60;
    }
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateButtonPosition);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  const playSound2 = () => {
    const audio = new Audio("/Page-1/Data 2.wav");
    audio.play();
    audio.volume = 0.3;
  };

  const data = [
    {
      sr: "01",
      title: "The Ghost of the Battlefield",
      text1:
        "Born into a noble lineage of warriors, Naoe's fate changed when her father was betrayed and slain. Escaping the ruins of her home, she survived in the shadows, mastering deception, strategy, and deadly arts.",
      name: "NAOE",
      text2:
        "Trained by rogue masters and mercenaries, Naoe mastered disguise, poisons, and swift strikes. Known as 'The Ghost,' she left no trace of her victims. Yet, vengeance was never her goal—only justice and a place to belong.",
      image: "/Page-3/Char4 1.png",

      skills: ["Shadow Step", "Poison Crafting", "Silent Execution"],
      capsule: [
        {
          img: "/Page-3/Legendary_Katana_-_Bloodshade 1.png",
          name: "Katana",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPszctvEt4Sa4QJpyuw_uvPTkU0sDGL35W7w&s",
          name: "Kusarigama",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GlcaXoojuwRXkMLzLMbjm8BRx64LNFWLDA&s",
          name: "Blowdart",
        },
      ],
      boximg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKGYgpx5iy1W0TRk1IUVJc3Gl2QBCG_Dp8w&s",
      stats: "/Page-3/stats.svg",
    },

    {
      sr: "02",
      title: "The Wolf of the North",
      text1:
        "Raised in icy battlefields of Norway, Eivor grew amidst raids, legends, and blood feuds. Driven by visions and fate, she carved her path from shieldmaiden to saga.",
      name: "EIVOR",
      text2:
        "With axe and resolve, Eivor storms through kingdoms. A leader, warrior, and seer, she fights not only for glory, but to forge a future worthy of the gods and her clan.",
      image: "/Page-3/Char2 1.png",

      skills: ["Dual Wielding", "Battle Cry", "Raven Sight"],
      capsule: [
        {
          img: "https://cdna.artstation.com/p/assets/images/images/048/868/960/large/nikash-mandora-final-render-001.jpg?1651131849",
          name: "Varin’s Axe",
        },
        {
          img: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/06/22-assassin-s-creed-valhalla-a-guide-to-all-the-predator-bows.jpg",
          name: "Predator Bow",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Sh3vuekCXe-K51b0ePiC98lHDan5xiSt8g&s",
          name: " Viking Round Shield",
        },
      ],
      boximg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTl4GyDnv6soE6ApHdsBiN3Y9zFHhQ2R7wvg&s",
      stats: "/Page-3/stats2.png",
    },

    {
      sr: "03",
      title: "The Fallen Samurai",
      text1:
        "Once a servant brought from foreign lands, Yasuke rose through ranks in war-torn Japan. Loyal to his master Oda Nobunaga, he fought with honor until betrayal shattered his path.",
      name: "YASUKE",
      text2:
        "Trained in bushido and brutal warfare, Yasuke wielded unmatched strength and loyalty. Cast aside by history, he now walks alone—seeking lost honor in a land that once embraced him.",
      image: "/Page-3/IMG_1276.png",

      skills: [
        " Heavy Weapon Mastery",
        "Unbreakable Defense",
        "Fearless Charge",
      ],
      capsule: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7RoAM4eIj6_EWcKkMuoj_zp5zsPgjcWhCw&s",
          name: "Kanabo ",
        },
        {
          img: "https://i.redd.it/gk6ytx256vc81.jpg",
          name: "Nodachi",
        },
        {
          img: "https://ravenforge.com/cdn/shop/files/WakizashiShopifypictures9.png?v=1740403416",
          name: "Tachi",
        },
      ],
      boximg:
        "https://assets-prd.ignimgs.com/2024/06/10/ac-shadows-details-blog-1718049618925.jpg",
      stats: "/Page-3/stats3.png",
    },

    {
      sr: "04",
      title: "The Medjay's Oath",
      text1:
        "Guardian of Egypt's people, Bayek of Siwa carried the ancient duty of Medjay. After his son’s death, he vowed vengeance—his path becoming the foundation of a hidden brotherhood.",
      name: "BAYEK",
      text2:
        "Master of tracking, archery, and the hidden blade, Bayek defends the innocent with silent wrath. His pain forged purpose, and his actions gave birth to an eternal creed.",
      image: "/Page-3/Char1 1.png",

      skills: [
        "Eagle Companion",
        "Stealth Assassination",
        "Bow Mastery",
        "Mounted Combat",
      ],
      capsule: [
        {
          img: "https://img.joomcdn.net/c2dadf78a098fb9265d6813e341bd6d9aa5e51f7_original.jpeg",
          name: "Hidden Blade",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACVnK7jslqK18DVR4D7Fz7rANU0nRG1TSCTmIlT7tSUr84rVekRG9BraZFbCL72t1My0&usqp=CAU",
          name: " Hunter Bow",
        },
        {
          img: "https://p.turbosquid.com/ts-thumb/zJ/oW2IYL/Tt/khopeshs3/jpg/1698516948/600x600/fit_q87/b962bc64e11400fec48176a4651439a30839e73a/khopeshs3.jpg",
          name: "Khopesh Sword",
        },
        {
          img: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/01/24/Assassins-Creed-Origins-Shards-from-a-Star_1200x500.jpg",
          name: "Dual Blades",
        },
      ],
      boximg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8k3FGbckyx4K1pAm7SF64xsvljWezWslsww&s",
      stats: "/Page-3/stats4.svg",
    },
  ];

  const activeData = data[activeIndex];

  const handleDotClick = (index) => {
    if (!clicked) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full min-h-screen  font-orbitron bg-gradient-to-b from-black via-black to-[#120202] overflow-x-hidden">
      <div className="flex p-5  mt-20 items-center gap-5">
        <img
          src="/Page-2/Arrow.svg"
          alt="Arrow"
          className="h-5 w-auto lg:w-fit lg:h-fit object-contain"
        />
        <h1 className="text-[#E35E4E] sm:text-2xl lg:text-5xl font-bold ">
          {" "}
          <DecryptedText
            key={clicked ? "stats" : "echoes"}
            text={clicked ? "Stats" : "Echoes of the Past"}
            speed={50}
            maxIterations={100}
            revealDirection="center"
            animateOn="view"
            resetOnChange={true}
          />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-20 lg:h-[60vh] 2xl:h-[50vh] relative p-5 mt-4 md:mt-18 flex-grow justify-center">
        <div className="border-t-2 lg:hidden relative mt-4 flex justify-evenly border-dashed border-[#E35E4E] w-full">
          {data.map((item, index) => (
            <div
              key={item.sr}
              className={`relative group ${clicked ? "pointer-events-none opacity-50" : ""
                }`}
              onClick={() => {
                playSound2();
                handleDotClick(index);
              }}
            >
              <div className="relative cursor-pointer h-[3vh]">
                <div className="absolute w-[2vh] h-[2vh] rounded-full bg-[#E35E4E] left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 group-hover:scale-110"></div>
                <div
                  className={`
                  absolute w-[3vh] h-[3vh] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 
                  border-2 border-[#E35E4E] bg-transparent rounded-full 
                  transition-all duration-300 ease-in-out
                  ${activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                    }
                `}
                ></div>
              </div>
              <div
                className={`
                absolute text-center top-[-8vh] left-1/2 -translate-x-1/2 w-[20vw]
                transition-all duration-300
                ${activeIndex === index ? "opacity-100" : "opacity-40"}
              `}
              >
                <h1 className="text-[#E35E4E] text-sm">{item.sr}</h1>
                <h1 className="text-zinc-400 text-xs">{item.name}</h1>
              </div>
              <div className="w-[20vw] h-[15vh] flex justify-center overflow-hidden mx-auto">
                <BoxElement
                  key={index}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Text Content */}
        <div
          className={`w-full md:w-[55vw] h-full flex flex-col gap-3 justify-center transition-all duration-900 ease-in-out ${clicked
              ? "-translate-x-[120%] opacity-0"
              : "translate-x-0 opacity-100"
            }`}
        >
          <h1 className="text-[#E35E4E] font-bold md:text-xl 2xl:text-4xl lg:text-3xl">
            <DecryptedText
              text={activeData.title}
              speed={50}
              maxIterations={40}
              animateOn={!clicked ? "view" : "none"}
              resetOnChange={clicked}
              key={`title-${activeIndex}-${clicked}`}
            />
          </h1>
          <div className="text-zinc-300 mt-2 md:text-xl lg:text-xl 2xl:text-3xl">
            <SplitText
              text={activeData.text1}
              delay={30}
              duration={0.3}
              animationFrom={{ opacity: 0, y: 40 }}
              animationTo={{ opacity: 1, y: 0 }}
              resetOnChange={true}
              easing="power3.out"
              threshold={0.2}
              rootMargin="-50px"
              textAlign="start"
            />
          </div>
          <div className="hidden md:block w-[50%] h-[30%]">
            <svg
              width="50%"
              height="200%"
              viewBox="0 0 180 60"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="0"
                y="0"
                fontSize="60"
                fontWeight="bold"
                stroke="#E35E4E"
                strokeWidth="0.5"
                fill="transparent"
                dominantBaseline="middle"
              >
                {activeData.sr}
              </text>
            </svg>
          </div>

          <h1 className="text-white font-bold lg:text-2xl 2xl:text-3xl md:text-xl">
            <DecryptedText
              text={activeData.name}
              speed={60}
              maxIterations={200}
              animateOn={!clicked ? "view" : "none"}
              resetOnChange={clicked}
              key={`name-${activeIndex}-${clicked}`}
            />
          </h1>
          <p className="text-zinc-300 mt-2 md:text-xl lg:text-xl 2xl:text-3xl">
            <SplitText
              text={activeData.text2}
              delay={30}
              duration={0.3}
              resetOnChange={true}
              easing="power3.out"
              threshold={0.2}
              rootMargin="-50px"
              textAlign="start"
            />
          </p>

          <button
            onClick={() => {
              playSound();
            }}
            className="bg-[#E35E4E] w-fit cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] font-orbitron font-bold px-3 py-2 text-sm md:text-base"
          >
            EXPLORE
          </button>
        </div>

        {/* Image Container */}
        <div
          id="container"
          ref={containerRef}
          className={`w-full md:w-[35vw] relative transition-all duration-900 mt-0 md:mt-[-20vh] ${clicked ? "-translate-x-[140%]" : "translate-x-0"
            } h-fit`}
          onMouseMove={!isMobile ? handleMouseMove : undefined}
        >
          <img
            className="w-full h-full object-cover"
            src="/Page-3/AC_Shadows_Crest_w_Color 2.png"
            alt=""
          />
          <div className={`absolute bottom-5 left-10 w-[80%] h-fit`}>
            <div className="relative">
              <img
                ref={characterImageRef}
                className="w-full h-full object-cover"
                src={activeData.image}
                alt={activeData.name}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgb(0, 0, 0),rgba(0,0,0,1) , rgba(0, 0, 0, 0.13))",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgb(8, 6, 6), rgba(0,0,0,1) , rgba(0, 0, 0, 0))",
                }}
              />
              <svg
                className={`absolute transition-all opacity-0 duration-900  ${clicked && "opacity-[100%]"
                  } bottom-10`}
                width="200"
                height="100"
                viewBox="0 0 180 100"
              >
                <text
                  x=""
                  y="80"
                  fontSize="100"
                  fontWeight="bold"
                  stroke="#E35E4E"
                  strokeWidth="0.5"
                  fill="transparent"
                >
                  {activeData.sr}
                </text>
              </svg>
            </div>
          </div>

          <div
            ref={buttonRef}
            id="button"
            onClick={() => {
              playSound();
              setClicked(!clicked);
              if (clicked) {
                setActiveIndex((prev) => prev);
              }
            }}
            className="absolute hidden md:flex h-[12vh] w-[12vh] items-center justify-center rounded-full bg-transparent border-2 border-[#E35E4E]"
          >
            <h1 className="text-sm text-[#E35E4E]">
              {clicked ? "Revert" : "Tap now"}
            </h1>
          </div>
        </div>

        {/* Expanded Content */}

        <div
          className={`w-[50vw] transition-all text-white duration-900 ease-in-out absolute  ${clicked
              ? "translate-x-[50%] px-10 opacity-[100%]"
              : "translate-x-[130%] opacity-0"
            }`}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[#E35E4E] font-bold lg:text-2xl 2xl:text-4xl">
              <DecryptedText
                text={activeData.name}
                speed={200}
                maxIterations={200}
                animateOn={clicked ? "view" : "none"} // Only animate when clicked
                key={`expanded-name-${activeIndex}-${clicked}`}
              />
            </h1>
            <h1 className="lg:text-xl 2xl:texxt-2xl">
              <DecryptedText
                text={activeData.title}
                speed={50}
                maxIterations={100}
                animateOn={clicked ? "view" : "none"} // Only animate when clicked
                key={`expanded-title-${activeIndex}-${clicked}`}
              />
            </h1>

            <div className="flex gap-5 lg:text-md 2xl:text-lg text-zinc-500">
              {activeData.skills.map((skill, index) => {
                return <h1 key={index}>{skill}</h1>;
              })}
            </div>
            <div className="flex mt-2 gap-6">
              {activeData.capsule.map((item, index) => {
                return (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[12vh] h-[12vh] rounded-full overflow-hidden border-2 border-[#E35E4E]">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt="Katana"
                      />
                    </div>
                    <h1 className="w-[10vw] text-center">{item.name}</h1>
                  </div>
                );
              })}
            </div>

            <div className="w-[35vh] ml-20 h-[35vh] mt-5">
              <img
                src={activeData.stats}
                alt="Stats"
                className="w-fit h-fit object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 hidden relative lg:mt-[10%] md:mt-[20vh] lg:flex justify-evenly border-dashed border-[#E35E4E] w-full">
        {data.map((item, index) => (
          <div
            key={item.sr}
            className={`relative group ${clicked ? "pointer-events-none opacity-50" : ""
              }`}
            onClick={() => {
              playSound2();
              handleDotClick(index);
            }}
          >
            {/* Dot elements container */}
            <div className="relative cursor-pointer h-[3vh]">
              {/* Hover dot */}
              <div className="absolute w-[2vh] h-[2vh] md:w-[3vh] md:h-[3vh] rounded-full bg-[#E35E4E] left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 group-hover:scale-110"></div>

              {/* Active ring */}
              <div
                className={`
                  absolute w-[3vh] h-[3vh] md:w-[5vh] md:h-[5vh] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 
                  border-2 border-[#E35E4E] bg-transparent rounded-full 
                  transition-all duration-300 ease-in-out
                  ${activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                  }
                `}
              ></div>
            </div>

            {/* Text labels */}
            <div
              className={`
                absolute text-center top-[-8vh] md:top-[-13vh] left-1/2 -translate-x-1/2 w-[20vw] md:w-[12vw]
                transition-all duration-300
                ${activeIndex === index ? "opacity-100" : "opacity-40"}
              `}
            >
              <h1 className="text-[#E35E4E] text-sm md:text-xl">{item.sr}</h1>
              <h1 className="text-zinc-400 text-xs md:text-lg">{item.name}</h1>
            </div>

            {/* Box container - fixed size and centered */}
            <div className="w-[20vw] md:w-[10vw] h-[15vh] md:h-[25vh] flex justify-center overflow-hidden mx-auto">
              <BoxElement
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
