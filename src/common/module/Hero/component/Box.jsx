import Image from "@/common/components/element/Image";
import React from "react";
import { Boxitem } from "@/common/constant/Boxitem";
import Scale from "@/common/components/element/Scale";
export default function Box() {
  return (
    <div className="lg:w-[90%] w-[90%] md:w-[40%] h-auto mt-52 lg:mt-10 flex justify-start  lg:justify-center relative">
      {Boxitem.map((item, index) => (
        <Scale delay={index * 0.1} key={index} className={item.style}>
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
