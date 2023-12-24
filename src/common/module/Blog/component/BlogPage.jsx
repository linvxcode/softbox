import Image from "@/common/component/element/Image";
import React from "react";
import { AllBlogItem } from "@/common/constant/BlogItem";
import Text from "@/common/component/element/Text";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function BlogPage() {
  return (
    <div className="h-auto max-w-[1500px] mt-10 flex flex-col justify-center px-5 lg:px-20 py-20  w-full">
      <div className="flex flex-col justify-center items-center mb-16">
        <Text texts="Newest Blog" className="text-start max-md:!text-7xl" />
      </div>
      <ComponentTransition className="grid lg:grid-cols-2 w-full gap-5 ">
        {AllBlogItem.map((item, index) => (
          <div
            key={index}
            className="px-5 group flex items-end w-full h-[250px] overflow-hidden relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="w-full absolute h-auto sm:group-hover:scale-125 transition-all duration-500 scale-150 lg:scale-110 ">
              <Image
                className="w-full h-full object-fill "
                alt="Img"
                src={item.img}
                width={400}
                height={400}
                priority
              />
            </div>
            <div className="relative py-10 flex flex-col">
              <div className="w-full  overflow-hidden relative">
                <h1 className="text-2xl group-hover:translate-y-[-150%] transition-all duration-500 font-semibold text-white">
                  {item.title}
                </h1>
                <h1 className="text-2xl absolute top-[150%] overflow-hidden group-hover:translate-y-[-150%]  transition-all duration-500 font-semibold text-white">
                  {item.title}
                </h1>
              </div>
              <p className="text-white text-sm">{item.shortDesc}</p>
            </div>
          </div>
        ))}
      </ComponentTransition>
    </div>
  );
}
