"use client";
import React from "react";
import { motion} from "framer-motion";

export default function Text({className, texts}) {
  const TextAnim = {
    initial: {
      y: 135,
    },
    animate: {
      y: 0,
    },
  };

  return (
    <>
      {texts.split(" ").map((text, index) => (
        <motion.div
          key={index}
          initial="initial"
          whileInView="animate"
          className="flex w-full flex-col overflow-hidden "
          viewport={{once:true}}
        >
          <motion.h1
            className={`${className} inline-block py-1 font-bold text-white text-8xl overflow-hidden `}
            variants={TextAnim}
            transition={{
              type: "tween",
              delay: index * 0.1,
              ease: [0.8, 0.2, 0, 1],
              duration: 1,
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
      ))}
    </>
  );
}
