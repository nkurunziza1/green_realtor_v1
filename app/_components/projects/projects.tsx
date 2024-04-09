"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { sourceSerif } from "@/app/_utils";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface Project {
  img: string;
  desc: string;
  title: string;
}

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("slide-in");

  let projects: Project[] = [
    {
      img: "/project1.jpg",
      desc: "Carefully evaluated this property to help in coming up with new architecture plan for the new playground development that will be hosting daily tournaments for this game",
      title: "Alpha",
    },
    {
      img: "/project2.jpg",
      desc: "Carefully evaluated this property to help in coming up with new architecture plan for the new playground development that will be hosting daily tournaments for this game",
      title: "Opta",
    },
    {
      img: "/project3.jpg",
      desc: "cCarefully evaluated this property to help in coming up with new architecture plan for the new playground development that will be hosting daily tournaments for this gameot",
      title: "Leni Oynx",
    },
  ];

  const handleNextProject = () => {
    if (currentProjectIndex === projects.length - 1) return;
    setSlideDirection("slide-out");
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => prevIndex + 1);
      setSlideDirection("slide-in");
    }, 500);
  };

  const handlePreviousProject = () => {
    if (currentProjectIndex === 0) return;
    setSlideDirection("slide-out");
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => prevIndex - 1);
      setSlideDirection("slide-in");
    }, 500);
  };

  return (
    <section
      className="w-full relative bg-black overflow-hidden py-10 "
      id="work"
    >
      <div className="flex md:justify-around mt-10 items-center">
        <h1
          className={`${sourceSerif.className} text-3xl ml-2 py-10 text-start text-white lg:text-center`}
        >
          Projects
        </h1>
        <div className=" hidden md:flex gap-2 text-secondaryTextColor">
          <BsArrowLeftCircle
            className="text-4xl font-thin cursor-pointer"
            onClick={handlePreviousProject}
          />

          <BsArrowRightCircle
            className={`text-4xl font-thin cursor-pointer hover:text-gray-300`}
            onClick={handleNextProject}
          />
        </div>
      </div>

      <div className="md:flex hidden overflow-hidden md:justify-center md:flex-col md:gap-10 items-center ">
        <div
          className={`flex gap-2 z-40 border-black relative ${
            slideDirection === "slide-in"
              ? "slide-in-animation"
              : "slide-out-animation"
          }`}
        >
          <div>
            <div className="h-full">
              <Image
                className=""
                src={projects[currentProjectIndex]?.img}
                alt={projects[currentProjectIndex]?.title}
                width="700"
                height="800"
              />
            </div>
            <div className="bg-white  flex flex-col p-2 bottom-12 right-[-100px] gap-4 absolute w-[300px]">
              <p className={`${sourceSerif.className} text-primary`}>
                {projects[currentProjectIndex]?.title}
              </p>
              <p className="text-[11px] text-secondaryTextColor">
                {projects[currentProjectIndex]?.desc}
              </p>

              <a
                href="#"
                className="flex items-center text-[11px] underline w-full text-black"
              >
                <p>Read more</p>
                <BsArrowRightShort />
              </a>
            </div>
          </div>
          <p className={`text-white ${sourceSerif.className} `}>
            {currentProjectIndex + 1}/{projects.length}
          </p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      {/* on mobile */}
      <div className="md:hidden mb-20  flex flex-col px-2 gap-20">
        {projects.map((project, index) => (
          <div className="relative">
            <div className="h-full" key={index}>
              <Image
                className=""
                src={project.img}
                alt={project.title}
                width="400"
                height="400"
              />
            </div>
            <div className="bg-white  flex flex-col p-2 bottom-[-60px] right-[20px] gap-4 absolute w-[300px] md:relative md:bottom-auto md:right-auto">
              <p className={`${sourceSerif.className} text-primary`}>
                {project.title}
              </p>
              <p className="text-[11px] text-secondaryTextColor">
                {project.desc}
              </p>

              <a
                href="#"
                className="flex items-center text-[11px] underline w-full text-black"
              >
                <p>Read more</p>
                <BsArrowRightShort />
              </a>
            </div>
          </div>
        ))}
      </div>
      <svg
        width="927"
        height="1024"
        viewBox="0 0 927 1024"
        className="absolute bottom-0 z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M668.629 11C672.157 74.2329 668.381 137.913 661.499 200.838C655.866 252.338 642.722 291.282 618.428 336.436C574.463 418.153 538.558 505.934 473.245 573.376C403.398 645.501 310.471 713.659 204.271 706.405C162.845 703.576 114.14 692.713 78.7685 669.294C66.2483 661.005 57.3999 655.006 48.3793 642.366C27.6019 613.254 20.1419 593.506 23.9596 558.354C25.5719 543.508 29.0473 532.473 34.2722 522.134C89.0633 413.712 214.722 404.544 322.357 405.234C354.149 405.438 387.484 407.364 418.48 414.94C459.541 424.977 498.234 447.965 535.711 466.61C596.109 496.659 658.561 524.306 712.84 564.955C752.406 594.584 778.475 634.66 809.392 672.434C827.577 694.653 844.065 717.321 854.744 744.23C863.652 766.679 868.74 791.09 875.423 814.313C884.84 847.037 895.956 883.573 899.097 917.368C902.067 949.315 897.196 981.6 891.966 1013"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="53"
          stroke-linecap="round"
        />
      </svg>
    </section>
  );
}
