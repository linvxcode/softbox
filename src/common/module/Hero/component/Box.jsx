import Image from "@/common/components/element/Image";
import React from "react";
import { Boxitem } from "@/common/constant/Boxitem";
import Scale from "@/common/components/element/Scale";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";
export default function Box() {
  const isMobile = useMobile();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, !isMobile ? [0, 300] : [200, 400], [0, 50]);
  const translate = useSpring(y, {
    duration: 5,
  });
  const yb = useTransform(scrollY, !isMobile ? [0, 300] : [200, 400], [1, 1.2]);
  const scale= useSpring(yb, {
    duration: 5,
  });
  return (
    <div className="lg:w-[90%] w-[90%] md:w-[40%] h-auto mt-52 lg:mt-10 mx-auto flex justify-start  lg:justify-center relative">
      {Boxitem.map((item, index) => (
        <Scale delay={index * 0.01} key={index} className={`${item.style} `}  style={index === 2 ? {translateY: translate} : {scale}}>
            <Image
              className={item.size}
              src={item.img}
              alt="Img"
              width={400}
              height={400}
              priority
            />
        </Scale>
      ))}
      
    </div>
  );
}
