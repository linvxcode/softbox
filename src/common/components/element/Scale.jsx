'use client'
import React from "react";
import { motion } from "framer-motion";

export const translateInViewVariant = {
  initial: {
        scale: 0
  },
  whileInview: {
    scale: 1

  },
}


const Scale = ({ children,className, delay , style}) => {
  return (
    <motion.div
      style={style}
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
