"use client";
import React, { useEffect, useRef, useState } from "react";
import { sourceSerif } from "@/app/_utils";

const Know = () => {
  const [sectionHeight, setSectionHeight] = useState<number | string>("auto");

  const svgRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svgPath = svgRef.current;
    const sectionElement = sectionRef.current;
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;
      if (svgPath && sectionElement) {
        const pathLength = svgPath.getTotalLength();
        svgPath.style.strokeDasharray = pathLength + " " + pathLength;

        svgPath.style.strokeDashoffset = `${pathLength - scrollPosition * 2}`;
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const sectionElement = sectionRef.current;
      if (sectionElement) {
        setSectionHeight(`${sectionElement.scrollHeight}px`);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="bg-white  h-auto relative pb-4 flex flex-col "
      id="know"
      ref={sectionRef}
      style={{ height: sectionHeight }}
    >
      <div className=" absolute z-40 flex flex-col gap-8 mb-2  mt-4 mx-auto  w-full">
        <div className="flex mx-auto  flex-col items-center md:mx-auto justify-center md:items-start w-[50%] mt-20">
          <div>
            <h1
              className={`${sourceSerif.className} text-primary text-xl text-center`}
            >
              Our Mission
            </h1>
            <p className="w-[300px] text-center text-sm  text-secondaryTextColor">
              Delivering exceptional real estate solutions through personalized
              attention and cutting-edge expertise.
            </p>
          </div>
        </div>
        <div className="flex  flex-col mx-auto items-center justify-center md:items-end md:mr-44">
          <div>
            <h1
              className={`${sourceSerif.className} text-primary text-xl text-center`}
            >
              Our Vision
            </h1>
            <p className="w-[300px] text-center  text-sm  text-secondaryTextColor">
              Becoming the best property consultants firm with emphasis on
              excellent service delivery and customer satisfaction.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-2  md:flex-row md:gap-32 items-center justify-center">
          <img
            src="/owner.jpg"
            alt="greenRealtor_owner"
            className="px-10 md:p-0"
          />
          <div className=" ml-10 md:ml-0 flex flex-col  md:items-start md:gap-6">
            <h1>
              <span className={`uppercase ${sourceSerif.className}  text-xl`}>
                Armand Kwitonda{" "}
              </span>
              <br />
              <span className="text-primary">CEO & Founder</span>
            </h1>

            <p className="tex-start mb-10 md:mb-0 text-sm w-[400px] text-secondaryTextColor">
              Armand KWITONDA holds a BSc Hon in Estate Management and Valuation
              with 4+ years of experience in the real estate sector. He is a
              registered member and certified property valuer at the Institute
              of Real Property Valuers in Rwanda (IRPV).
            </p>
          </div>
        </div>
      </div>
      <svg
        width="802"
        height=" 100vh"
        viewBox="0 0 802 100vh"
        fill="none"
        className="relative z-20"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          className="path"
          d="M584 -34C587.327 31.9584 578.586 112.194 572.096 177.831C566.785 231.551 554.39 272.174 531.482 319.274C490.023 404.514 456.165 496.078 394.575 566.427C328.71 641.66 241.081 712.757 140.936 705.19C101.872 702.238 55.9441 690.908 22.589 666.479C10.7826 657.832 2.43865 651.575 -6.06769 638.391C-25.6605 608.023 -32.6951 587.424 -29.0951 550.757C-27.5748 535.272 -24.2975 523.761 -19.3704 512.976C32.2968 399.881 150.791 390.317 252.29 391.038C282.269 391.25 313.704 393.259 342.933 401.162C381.653 411.631 418.139 435.61 453.48 455.059C510.435 486.403 569.326 515.242 620.511 557.643C657.82 588.549 682.403 630.352 711.557 669.755C728.706 692.931 744.254 716.577 754.324 744.645C762.724 768.062 771.198 798.036 777.5 822.26C786.38 856.394 793.187 889.995 796.149 925.246C798.949 958.57 794.355 992.246 789.424 1025"
          stroke="#004A0E"
          strokeOpacity="0.1"
          strokeWidth="10"
          strokeLinecap="round"
          ref={svgRef}
        />
      </svg>
    </section>
  );
};

export default Know;
