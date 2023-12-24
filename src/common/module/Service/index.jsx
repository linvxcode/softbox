import Text from "@/common/components/element/Text";
import React from "react";
import Card from "./Card";

export default function Service() {
  return (
    <div className="h-auto max-w-[1500px] flex justify-center relative w-full mb-32 ">
      <div className="flex w-full px-5 lg:px-10 flex-col justify-start items-start">
        <Text texts="SERVICE" className="text-start max-md:text-5xl" />
        <h1 className="text-xl lg:w-[30%] py-5 text-neutral-300">
          We help entrepreneurs convert their ideas into products and services.
        </h1>
        <Card/>
      </div>
    </div>
  );
}
