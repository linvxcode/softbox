import Breakline from "@/common/components/element/Breakline";

import ComponentTransition from "@/common/components/element/ComponentTransition";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineFeedback } from "react-icons/md";
import Button from "@/common/components/element/Button";
import Text from "@/common/components/element/Text";

export default function Feedback() {
  return (
    <div className="h-auto max-w-[1500px] px-5 lg:px-10 pb-20">
      <Text texts="FEEDBACK" className="text-start max-md:text-5xl" />

      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-start flex-col"
      >
        <h1 className="text-xl lg:w-[30%] py-5 text-neutral-300">
          what people say
        </h1>
      </ComponentTransition>
      <ComponentTransition className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div>
          <h1 className="dark:text-neutral-400 text-neutral-800">
            Everyone is aligned and working together seamlessly. Given that some
            of our team members may not possess innate organizational skills,
            Teaser proves to be a valuable asset!
          </h1>
          <div className="gap-2  items-center flex mt-5 ">
            <div className=" w-[10%] h-[10%]">
              <Image
                className="rounded-full outline outline-[1px] dark:outline-white outline-black"
                src="/people.jpg"
                alt="Img"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <h1 className="text-sm dark:text-neutral-400 text-neutral-800">
                CEO @ ThatCompany
              </h1>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <Breakline />
        </div>
        <div>
          <h1 className="dark:text-neutral-400 text-neutral-800">
            Everyone is aligned and working together seamlessly. Given that some
            of our team members may not possess innate organizational skills,
            Teaser proves to be a valuable asset!
          </h1>
          <div className="gap-2  items-center flex mt-5 ">
            <div className=" w-[10%] h-[10%]">
              <Image
                className="rounded-full !grayscale outline outline-[1px] dark:outline-white outline-black"
                src="/people.jpg"
                alt="Img"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <h1 className="text-sm dark:text-neutral-400 text-neutral-800">
                CEO @ ThatCompany
              </h1>
            </div>
          </div>
        </div>
      </ComponentTransition>
    </div>
  );
}
