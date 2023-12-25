import Button from "@/common/components/element/Button";
import ComponentTransition from "@/common/components/element/ComponentTransition";
import React from "react";

export default function Footer() {
  return (
    <div className="h-auto max-w-[1500px] flex justify-start flex-col px-5 lg:px-10 relative py-10  w-full">
      <div className="absolute  z-[-9] glowbg2 w-[140px] h-[140px] top-[10%] left-[20%]"></div>
      <div className="absolute  z-[-9] glowbg3 w-[200px] h-[200px] top-[90%] left-[70%]"></div>

      <div className="bg-[#16161693] py-20  md:px-40 rounded-3xl flex-col flex justify-center items-center">
        <ComponentTransition className="w-full flex-col flex justify-center items-center">
          <h1 className="sm:text-7xl text-5xl py-4 text-center font-semibold md:px-20 text-white">
            are you interested.
          </h1>
          <Button
            title="Send Message"
            className="mt-5 !bg-white !text-black overflow-hidden"
          />
          <h1 className="text-white mt-10 px-5 text-center">
            © 2023 <span className="font-bold ">Fahlevi</span> as{" "}
            <span className="font-bold ">mfahlevi740@gmail.com</span>
          </h1>
        </ComponentTransition>
      </div>
    </div>
  );
}
