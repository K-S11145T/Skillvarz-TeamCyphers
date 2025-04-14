import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PreOrderPopup = ({ submitted }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (submitted) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="absolute z-[99999] top-5 right-5"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src="./Page-1/PopUp.png"
              alt="popup"
              className="w-auto object-cover"
            />
            <h3 className="absolute w-full text-center block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm">
              Pre-order Confirmed! Prepare for the Shadows.
            </h3>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreOrderPopup;
