'use client'
import Button from "@/common/components/element/Button";
import React from "react";
import Box from "./component/Box";

export default function Hero() {

  return (
    <div className="h-auto max-w-[1500px] flex justify-center relative w-full mb-32 mt-44 lg:mt-52">
      <div className="grid lg:grid-cols-2 place-content-between  w-full px-5 lg:px-10">
        <div className="flex flex-col justify-start relative">
          <h1 className="lg:text-8xl text-7xl flex flex-col font-bold text-white">
            SOFT BOX
          <span className="md:text-6xl text-5xl text-neutral-200">Present</span>
          </h1>
          <p className="mt-8 xl:w-[80%] text-neutral-300">
            Do you have an idea but are struggling to execute it because of the
            complexities involved? Don&rsquo;t worry. We are here to solve your
            problem. We help entrepreneurs convert their ideas into products and
            services.
          </p>
          <div className="mt-8">
            <Button title="Contact Us" />
          </div>
        <div className="absolute  z-[-9] glowbg3 w-[110px] h-[110px] top-[-50%] left-0"></div>
        <div className="absolute  z-[-9] glowbg2 w-[140px] h-[140px] top-[100%] left-[20%]"></div>
        </div>
        <div className="absolute  z-[-9] glowbg w-[50%] md:w-[500px] h-[400px] right-0"></div>
        <Box />
      </div>
    </div>
  );
}
