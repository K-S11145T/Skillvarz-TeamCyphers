import { useEffect, useRef } from "react";
import gsap from "gsap";

const BoxElement = ({ item, index, activeIndex }) => {
  const boxRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (activeIndex === index) {
      // Reset initial state
      gsap.set(boxRef.current, { y: -100, opacity: 0});
      gsap.set(imgRef.current, { rotation: -45, scale: 1.5 });
      
      // Create timeline for sequenced animations
      const tl = gsap.timeline();
      
      // Box drop animation with bounce effect
      tl.to(boxRef.current, {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.5,
        ease: "back.out(1.7)" 
      })
      // Image scale animation
      .to(imgRef.current, {
        rotation: -45,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.5") // Overlap with previous animation
      .to(imgRef.current, {
        duration: 0.3,
        ease: "power2.in"
      });
    } else {
      // Reset when not active
      gsap.to(boxRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  }, [activeIndex, index]);

  return (
    <div
      ref={boxRef}
      className={`flex flex-col gap-3 items-center`}
    >
      <div className="w-[1px] lg:h-[10vh] h-[5.5vh] border-r-2 border-dashed border-[#E35E4E]" />
      <div className="lg:w-[10vh] lg:h-[10vh] w-[10vw] h-[10vw] overflow-hidden rotate-[45deg] border-2 border-[#E35E4E]">
        <img
          ref={imgRef}
          className="w-full h-full object-cover"
          src={item.boximg}
          alt=""
        />
      </div>
    </div>
  );
};

export default BoxElement;