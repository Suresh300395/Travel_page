import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 100 }, // Starts 100px down and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Animates to original position (y: 0) and visible
};

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Animation triggers once when 50% of the element is in view
      className="card"
      // Add any other CSS classes for styling your card (e.g., shadow, padding, etc.)
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
