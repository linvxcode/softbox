import Image from "@/common/components/element/Image";
import React from "react";
import { BlogItem } from "@/common/constant/BlogItem";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import Text from "@/common/components/element/Text";

export default function Blog() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-20 mb-20 w-full">
      <div className="flex flex-col mb-10 items-start w-full">
        <Text className="max-md:text-5xl" texts="BLOG" />
        <h1 className="text-xl lg:w-[30%] py-5 text-neutral-300">
        Latest blog written with love
        </h1>
      </div>
      <div className="grid md:grid-cols-2 w-full gap-5 ">
        {BlogItem.map((item, index) => (
          <div
            key={index}
            className="px-5 group flex items-end w-full h-[250px] overflow-hidden relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="w-full absolute flex justify-center items-center top-0 h-auto sm:group-hover:scale-125 transition-all duration-500 scale-150 lg:scale-110 ">
              <Image
                className="w-full h-auto object-fill "
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
      </div>
    </div>
  );
}
