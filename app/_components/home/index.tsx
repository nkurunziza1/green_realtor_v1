"use client";
import React, { useState, useEffect } from "react";
import { sourceSerif } from "@/app/_utils";
import { Variants, motion } from "framer-motion";

const HomePage = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstSection(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="" id="home">
      {showFirstSection ? (
        <section
          className={`bg-background px-2 lg:px-16 py-5 lg:py-0 h-auto lg:h-[100vh] bg-cover bg-no-repeat bg-center bg-fixed text-primary flex flex-col lg:flex-row items-center justify-between `}
        >
          <div className="flex mx-auto gap-10 flex-col justify-center items-center ">
            <motion.p
              variants={container}
              initial="hidden"
              animate="visible"
              className={`${sourceSerif.className} md:mb-[-100px] z-40 mt-20 flex justify-center flex-col mb-4 sm:mb-0 sm:text-center md:text-left lg:text-left`}
            >
              <motion.span variants={child} className="text-3xl md:text-6xl">
                Helping you build your
              </motion.span>

              <motion.span
                variants={child}
                className="text-3xl text-center md:text-6xl mt-2 md:mt-7"
              >
                dream life
              </motion.span>
            </motion.p>

            <div className="relative animate-slide-in">
              <img src="/home-cut.svg" alt="" className="relative z-30 " />
              <img
                src="/Pattern.svg"
                alt=""
                className="absolute top-[-30px] md:top-40 md:left-[-80px]"
              />
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`bg-homeImg px-2 lg:px-16 py-5 lg:py-0 h-auto lg:h-[100vh] bg-cover bg-no-repeat bg-center bg-fixed text-primary flex flex-col lg:flex-row items-center justify-between animate-slide-out`}
        ></section>
      )}
    </main>
  );
};

export default HomePage;
