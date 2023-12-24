"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={clsx(
        scrolled ? `bg-neutral-800/80 backdrop-blur-md transition-all duration-300` : ``,
        `w-full transition-all duration-300 mx-auto max-w-[1500px] py-5 px-5 lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="flex  basis-[50%] justify-start">
          <Link href="/">
            <h1 className="text-2xl text-white font-bold">SOFTBOX</h1>
          </Link>
        </div>
        <div className="hidden gap-6 justify-end lg:flex">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className="group overflow-hidden relative"
              key={index}
            >
              <h1 className="text-sm text-white">{item.title}</h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[19px] h-[1px] w-full translate-x-[0%] bg-[#fff] transition-transform duration-300 "
                    : "absolute top-[19px] h-[1px] w-full translate-x-[-100%] bg-[#fff] transition-transform duration-300 group-hover:translate-x-[0%]"
                )}
              ></div>
            </Link>
          ))}
        </div>
        <div>
          {/* <Login /> */}
        </div>
        <div className="lg:hidden flex ml-2">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
