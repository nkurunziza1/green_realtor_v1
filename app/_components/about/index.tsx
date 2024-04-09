"use client";
import { motion, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";
import { sourceSerif } from "@/app/_utils";

const About = () => {
  const images = ["/rect1.svg", "/rect2.svg", "/rect3.svg", "/rect4.svg"];
  const [containerWidth, setContainerWidth] = useState("50%");
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [marginTop, setMarginTop] = useState("0px");
  const [showParagraph, setShowParagraph] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("");

  const paragraph =
    "Welcome to Green Realtors Ltd., your trusted partner in all things real estate. Since 2012, we've helped individuals and families across the region navigate the exciting, yet often complex, world of property ownership. Our team of passionate and experienced professionals provides a comprehensive suite of services to ensure a smooth and successful journey, whether you're buying, selling, building, or investing.";

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
    hidden: { opacity: 0, y: 30, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = document.getElementById("about");

      if (section) {
        const sectionHeight = section.offsetHeight;
        const documentHeight = document.body.clientHeight;

        const scrollPercentage =
          (scrollPosition / (documentHeight - windowHeight)) * 100;

        const newWidth = `${50 + scrollPercentage / 2}%`;
        setContainerWidth(newWidth);

        if (parseFloat(newWidth) >= 50) {
          setShowParagraph(true);
          setMarginTop("20px");
        } else {
          setShowParagraph(false);
        }

        const newSectionHeight = `${100 + scrollPercentage}%`;
        setSectionHeight(newSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-primary"
      style={{ height: sectionHeight }}
    >
      <div className="mx-auto max-w-screen-xl h-full flex flex-col py-16">
        <motion.div
          className="md:grid relative mx-auto md:grid-cols-2 gap-10"
          style={{ width: containerWidth }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              style={{ marginTop: marginTop }}
              className="z-20 md:flex hidden transition-all scale-110 duration-300"
            />
          ))}
          {showParagraph && (
            <motion.div
              className="absolute hidden md:flex w-[700px] z-40 top-72 left-32"
              variants={child}
            >
              <p
                className={` ${
                  sourceSerif.className
                } text-center text-paragraphColor ${
                  !showParagraph ? "animate-leave" : "animate-enter"
                }`}
              >
                {paragraph}
              </p>
            </motion.div>
          )}
        </motion.div>
        <div className="md:hidden flex justify-center items-center z-40 h-full transition-all scale-100 duration-1000 ">
          <p
            className={` ${sourceSerif.className} text-center w-[250px] text-paragraphColor `}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
