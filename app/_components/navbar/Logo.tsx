import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";

export default function Logo({
  handleNavOpen,
  isNavOpen,
}: {
  handleNavOpen: () => void;
  isNavOpen: boolean;
}) {
  return (
    <div className="  transition-all duration-300 flex flex-row justify-between md:w-auto w-full items-center pl-4">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          height={100}
          width={100}
          alt={"green reator logo"}
        />
      </Link>
      <div
        onClick={handleNavOpen}
        className={` burger-icon ${
          isNavOpen ? "open" : ""
        } cursor-pointer block lg:hidden`}
      >
        {isNavOpen ? <RiCloseFill size={20} /> : <CiMenuBurger size={20} />}
      </div>
    </div>
  );
}
