import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import "./stack.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const scale = useMotionValue(1);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
      x.set(info.velocity.x * 0.2);
      y.set(info.velocity.y * 0.2);
    } else {
      x.set(0);
      y.set(0);
    }
    scale.set(1);
  }

  return (
    <motion.div
      className="card-rotate"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        scale,
        zIndex: 1000,
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = true,
  sensitivity = 200,
  cardsData = [],
  animationConfig = { stiffness: 280, damping: 15 },
  sendToBackOnClick = true,
}) {
  const [cards, setCards] = useState([]);
  const [cardDimensions, setCardDimensions] = useState({
    width: 40,
    height: 50,
  });

  useEffect(() => {
    const updateResponsiveData = () => {
      const width = window.innerWidth;

      const defaultCards = [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
        },
      ];

      if (width < 640) {
        setCards(cardsData.length ? cardsData.slice(0, 4) : defaultCards);
        setCardDimensions({ width: 28, height: 34 });
      } else if (width < 768) {
        setCards(cardsData.length ? cardsData.slice(0, 4) : defaultCards);
        setCardDimensions({ width: 20, height: 24 });
      } else if (width < 1024) {
        setCards(cardsData.length ? cardsData.slice(0, 4) : defaultCards);
        setCardDimensions({ width: 18, height: 24 });
      } else if (width < 1280) {
        setCards(cardsData.length ? cardsData.slice(0, 4) : defaultCards);
        setCardDimensions({ width: 18, height: 22 });
      } else {
        setCards(cardsData.length ? cardsData.slice(0, 4) : defaultCards);
        setCardDimensions({ width: 12, height: 16 });
      }
    };

    updateResponsiveData();
    window.addEventListener("resize", updateResponsiveData);

    return () => window.removeEventListener("resize", updateResponsiveData);
  }, [cardsData]);
  const sendToBack = () => {
    setCards((prev) => {
      const [firstCard, ...rest] = prev; // Extract the first card
      return [...rest, firstCard]; // Move the first card to the end
    });
  };

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      if (cards.length > 0) {
        sendToBack(cards[cards.length - 1].id);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [cards]);

  // Index of top visible card (last in the array)
  const topCardId = cards[0]?.id;
  const originalOrder = cardsData.length
    ? cardsData
    : [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const visibleIndex = originalOrder.findIndex((card) => card.id === topCardId);

  return (
    <div
      className="stack-container relative"
      style={{
        width: `${cardDimensions.width}vw`,
        height: `${cardDimensions.height}vw`,
        perspective: 1000,
      }}
    >
      {/* Timeline Progress */}
      <div className="timeline absolute flex w-full -bottom-7 text-white items-center gap-1">
        <div className="bg-zinc-600 h-[0.215vh] w-full overflow-hidden relative">
          <motion.div
            className="h-full bg-red-500 absolute left-0 top-0"
            key={topCardId}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </div>
        <h3 className="text-sm text-red-500">
          {visibleIndex + 1}/{cards.length}
        </h3>
      </div>

      {cards.map((card, index) => {
        const zIndex = cards.length - index;
        const rotate = 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                translateY: -((cards.length - index - 1) * 15),
                rotate,
                filter: "brightness(1)",
                transition: {
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                },
              }}
              style={{
                width: `${cardDimensions.width}vw`,
                height: `${cardDimensions.height}vw`,
                zIndex,
                originX: 0.5,
                originY: 0.5,
              }}
            >
              <motion.div
                className="card-image"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={card.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <svg
                  className="absolute top-0 left-0 w-full stroke-red-700 h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 95,0 100,5 100,100 5,100 0,95"
                    fill="none"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
