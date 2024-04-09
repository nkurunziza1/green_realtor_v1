"use client";
import React, { useState } from "react";
import { sourceSerif } from "@/app/_utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceType {
  title: string;
  desc?: string;
  image: string;
}

const Services = () => {
  const services: ServiceType[] = [
    {
      title: "Property Valuation",
      desc: "We help you assess the accurate value of your property for sales and purchase, tax, mortgage, insurance, and conflict resolutions among others.",
      image: "/service.svg",
    },
    {
      title: "Project Management",
      desc: "We make sure that what is delivered is right, we excel in helping you plan your project better and in an easy manner.",
      image: "/service.svg",
    },
    {
      title: "Property Management",
      desc: "We specialize in maximizing property safety, occupancy, and rental value while maintaining aesthetic appeal. Our services include ensuring timely rent payment and providing solid tenancy agreements.",
      image: "/service3.svg",
    },
    {
      title: "Architectural Consultancy",
      desc: "We help you determine exactly what you need by coming up with innovative ideas to solve the most complex design problems",
      image: "/service4.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
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

  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className=" relative py-10" id="services">
      <h1
        className={`${sourceSerif.className} text-secondary text-center py-4 md:ml-[195px] md:text-start text-3xl bg-background `}
      >
        Our Services
      </h1>{" "}
      <div className="flex  md:w-[80%] mx-auto  flex-wrap gap-10 flex-col items-center justify-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative   w-full"
            variants={containerVariants}
          >
            <div
              className={`hover:text-white p-4  border-b-2 z-30 cursor-pointer  hover:bg-primary transition-all duration-1000 flex md:justify-between md:flex-row items-center flex-col ${
                hoveredService === service.title ? "text-gray-500" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.title)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex mb-4   md:flex-row md:justify-between gap-2 md:gap-32">
                <p
                  className={`${
                    hoveredService === service.title
                      ? "text-paragraphColor"
                      : "text-primary"
                  }  font-serif text-md md:text-3xl `}
                >
                  0{index + 1}
                </p>
                <div className="flex flex-col gap-4 w- justify-start">
                  <h1
                    className={`${
                      hoveredService === service.title
                        ? "text-paragraphColor"
                        : "text-primary"
                    }  font-serif text-md   md:text-3xl `}
                  >
                    {service.title}
                  </h1>
                  <p
                    className={` md:w-[500px] text-sm ${
                      hoveredService === service.title
                        ? "text-white"
                        : "text-gray-500 md:text-md "
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
              <motion.div
                style={{ width: "300px", height: "300px" }}
                variants={childVariants}
                className="md:hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  style={{ transition: "all 1s ease-in-out" }}
                />
              </motion.div>
            </div>
            <div
              className={`hidden md:flex ${
                hoveredService === service.title
                  ? "absolute z-40 top-0 right-10 transition-all ease-in-out duration-1000 rotate-45"
                  : ""
              }`}
            >
              {hoveredService === service.title && (
                <motion.div
                  style={{ width: "300px", height: "300px" }}
                  variants={childVariants}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={300}
                    style={{ transition: "all 1s ease-in-out" }}
                    objectFit="fit"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
