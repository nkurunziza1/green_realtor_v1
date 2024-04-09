"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "./Logo";
import Button from "../button";
import ButtonComp from "../button";
import Image from "next/image";

export interface OverlayProps {
  handleOpenOverlay?: () => void;
  withLogo?: boolean;
}

export default function Navbar({ handleOpenOverlay, withLogo }: OverlayProps) {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleNavOpen = () => {
    setisNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop >= 40) {
        setShadow(true);
      } else {
        setShadow(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 40 && rect.bottom >= 40) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setisNavOpen(false);
  };

  const navbarLinks = [
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={` navbar ${
        isNavOpen ? "open " : ""
      } fixed flex flex-col pb-2 lg:flex-row md:p-4   top-0 w-full z-50    md:justify-around md:items-center ${
        shadow ? "shadow-md transition-all duration-300 bg-whiteColor" : ""
      }`}
    >
      <Logo handleNavOpen={handleNavOpen} isNavOpen={isNavOpen} />

      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } w-full lg:flex justify-center    text-white  md:rounded-md rounded-none`}
      >
        <ul
          className={`mx-auto flex md:flex-row gap-4 w-full py-20 md:py-0 bg-background flex-col md:bg-transparent text-black justify-center items-center ${
            isNavOpen ? "open" : "closed"
          } ${shadow ? " transition-all duration-300 bg-whiteColor" : ""}`}
        >
          {navbarLinks.map((link, index) => {
            const isActive =
              //@ts-ignore
              router.pathname === link.href ||
              activeSection === link.href.slice(1);
            return (
              <li
                key={index}
                className={`uppercase text-xs text-black font-medium lg:text-secondary first:border-l-0 border-0 hover:text-primary cursor-pointer relative`}
              >
                <a
                  href="#/"
                  onClick={() => handleSmoothScroll(link.href.slice(1))}
                >
                  {link.label}
                </a>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform top-4 -translate-x-1/2 h-1 w-1 bg-primary   duration-1000 rounded-full"></span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <ButtonComp
          className={` hidden md:flex ${
            !showImage ? "rounded-3xl" : ""
          } transition-all duration-1000`}
        >
          Let's work{" "}
          <Image src="/arrow.svg" alt="arrow" width={30} height={30} />
        </ButtonComp>
      </div>
    </div>
  );
}
