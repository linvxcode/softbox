'use client'
import React from "react";
import { motion } from "framer-motion";

export const translateInViewVariant = {
  initial: {
        opacity: 0,
        scale: 0.1
        // y: 90,
    // height: '10px'
  },
  whileInview: {
    opacity: 1,
    scale: 1
    // y: 0,
    // height: 'auto',

  },
}


const Scale = ({ children,className, delay }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInview"
      variants={translateInViewVariant}
      transition={{
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1.5,
      }}
      className={className}
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
};

export default Scale;
