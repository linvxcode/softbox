import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/components/element/ComponentTransition";
import Image from "@/common/components/element/Image";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg3 w-[200px] h-[200px]  left-0 "></div>
      <ComponentTransition className='w-full overflow-hidden px-10 py-5 md:basis-[65%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl'>
        <h1 className="text-2xl font-bold py-1 text-neutral-800 dark:text-neutral-100">
          Precision
        </h1>
        <h1 className="text-sm  pb-5 text-neutral-800 dark:text-neutral-100">
        Accuracy that propels you forward
        </h1>

        <div className="w-full h-[60%]  rounded-3xl overflow-hidden">
        <Image 
        src="/img2.webp"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-[100%] relative lg:top-[-250px] h-auto "
        />
        </div>
      </ComponentTransition>
      <ComponentTransition delay={0.2} className="w-full h-auto md:h-[300px] md:basis-[30%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <Image 
        src="/Card.jpg"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <div className="absolute  z-[-9] glowbg2 w-[200px] h-[200px] top-[50%] right-0"></div>

      <ComponentTransition delay={0.1} className="w-full h-[300px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <Image 
        src="/img.png"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-full h-[280px] object-cover scale-125"
        />
      </ComponentTransition>
     
      
      <ComponentTransition className='w-full overflow-hidden px-10 py-5 md:basis-[65%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl'>
        <h1 className="text-2xl font-bold py-1 text-neutral-800 dark:text-neutral-100">
        Vision
        </h1>
        <h1 className="text-sm  pb-5 text-neutral-800 dark:text-neutral-100">
        See the future, today
        </h1>

        <div className="w-full h-[60%]  rounded-3xl overflow-hidden">
        <Image 
        src="/2.png"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-[100%] relative lg:top-[-450px] h-auto "
        />
        </div>
        </ComponentTransition>
      
        <div className="absolute  z-[-9] glowbg3 w-[200px] h-[200px] top-[80%]  left-0"></div>
        <ComponentTransition className='w-full overflow-hidden px-10 py-5 md:basis-[65%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl'>
        <h1 className="text-2xl font-bold py-1 text-neutral-800 dark:text-neutral-100">
          Mission
        </h1>
        <h1 className="text-sm  pb-5 text-neutral-800 dark:text-neutral-100">
        Watch Your Success
        </h1>

        <div className="w-full h-[60%]  rounded-3xl overflow-hidden">
        <Image 
        src="/wood.jpg"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-[100%] relative lg:top-[-250px] h-auto "
        />
        </div>
      </ComponentTransition>
      <ComponentTransition delay={0.2} className="w-full h-auto md:h-[300px] md:basis-[30%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <Image 
        src="/abs.png"
        alt="Header Image"
        width={400}
        height={400}
        loading='lazy'
        className="w-full object-cover scale-150 relative lg:top-[50px]"
        />
      </ComponentTransition>
      
    </div>
  );
};

export default Card;
