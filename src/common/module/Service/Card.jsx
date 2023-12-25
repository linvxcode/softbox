import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/components/element/ComponentTransition";
import Image from "@/common/components/element/Image";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg3 w-[200px] h-[200px]  left-0 "></div>
      <ComponentTransition className='w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl'>
        <WiDayCloudy size={50} />
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Lorem Ipsum
        </h1>
        <h2 className="text-sm text-neutral-800 dark:text-neutral-300">Create Fast And Simple</h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
          voluptatem quo laborum perferendis eligendi voluptas nam dignissimos
          hic dolorem inventore optio. Eaque, deserunt.
        </p>
      </ComponentTransition>
      <ComponentTransition delay={0.2} className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <Image 
        src="/Card.jpg"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition delay={0.1} className="w-full h-[250px]  md:basis-[65%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <Image 
        src="/img.png"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-full h-[280px] object-cover scale-110"
        />
      </ComponentTransition>
     
      
      <ComponentTransition delay={0.1} className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
      <div className="absolute  glowbg3 opacity-30 inset-0  left-0 "></div>
      <FaCode  size={40} />
      <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Custom Web Development
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            SPA / MPA
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Tailored website solutions to meet specific business needs and goals.
        </p>
      </ComponentTransition>
      
      
      
    </div>
  );
};

export default Card;
