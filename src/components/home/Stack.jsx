import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
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
      // Add toss animation when swiping
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
        zIndex: 1000, // Ensure active card stays on top
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
  cardDimensions = { width: 182, height: 230 },
  cardsData = [],
  animationConfig = { stiffness: 280, damping: 15 },
  sendToBackOnClick = true,
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
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
        ]
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 1000,
      }}
    >
      {cards.map((card, index) => {
        const zIndex = cards.length - index;
        const rotate = 0;
        // const rotate = randomRotation ? Math.random() * 8 - 4 : 0;

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
                rotate: rotate,
                filter: "brightness(1)",
                transition: {
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                },
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                zIndex,
                originX: 0.5,
                originY: 0.5,
              }}
            >
              <motion.img
                src={card.img}
                alt={`card-${card.id}`}
                className="card-image"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
