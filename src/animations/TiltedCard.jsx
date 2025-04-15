import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  containerHeight = "300px",
  mdContainerHeight = null,
  containerWidth = "100%",
  mdContainerWidth = null,
  clipPath = null,
  overlayImage = null,
  overlayContent = null,
  additionalStyles = {},
  scaleOnHover = 1.05,
  rotateAmplitude = 10,
  showMobileWarning = true,
  showTooltip = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  // Create className string based on props
  const containerClasses = [
    "tilted-card-figure",
    "relative",
    additionalStyles?.container,
    clipPath ? `[clip-path:${clipPath}]` : "",
    "overflow-hidden",
  ].join(" ");
  return (
    <motion.figure
    ref={ref}
    className={containerClasses}
    style={{
      height: containerHeight,
      width: containerWidth,
      clipPath: clipPath,
      rotateX,
      rotateY,
      scale,
    }}
    onMouseMove={handleMouse}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

<div className="tilted-card-inner min-w-full h-full relative">
<motion.img
  src={imageSrc}
  alt={altText}
  className={`absolute top-0 scale-[120%] left-0 w-full h-full object-cover ${additionalStyles?.image || ""}`}

          onError={(e) => {
            console.error("Error loading image:", imageSrc);
            e.target.style.display = "none";
          }}
        />

        {overlayImage && (
          <img
            src={overlayImage}
            alt=""
            className="absolute top-0 w-full h-full"
            onError={(e) => {
              console.error("Error loading overlay image:", overlayImage);
              e.target.style.display = "none";
            }}
          />
        )}

        <div
          className={`absolute top-0 left-0 w-full h-full ${additionalStyles?.overlay || ""}`}
        />

        {overlayContent && (
          <div className="absolute inset-0 w-full h-full">
            {overlayContent}
          </div>
        )}
      </div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </motion.figure>
  );
}