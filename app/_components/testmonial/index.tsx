"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sourceSerif } from "@/app/_utils";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { openSans } from "@/app/_utils";

interface TestimonialsType {
  desc: string;
  image: string;
  tag: string;
  name: string;
}

export default function Testimonials() {
  const Testimonials: TestimonialsType[] = [
    {
      desc: "Green realtors ltd has served me well, it is a highly professional entity with zeal to offer exuberant services in the real estate sectors. Their services are impeccable.",
      image: "/testimonial1.jpeg",
      name: "Deus Sebabo",
      tag: "CHIC",
    },
    {
      desc: "I had better services from Green Realtors when they valued my plot of land, not only are they showing professionalism but also get the work done as soon as possible.",
      image: "/testimonial2.jpeg",
      name: "Arnold Bulangarire",
      tag: "Landmark",
    },
    {
      desc: "I recently shifted my collaboration with Green Realtors, but I noticed a big difference between them and others! They are very reliable and they tremendously take a good care of your property like it's theirs with professionalism and amazing creativity.",
      image: "/testimonial3.jpeg",
      name: "Solange Umwizerwa",
      tag: "RAMU",
    },
  ];

  let sliderRef = useRef(null);
  const next = () => {
    //@ts-ignore
    sliderRef.slickNext();
  };
  const previous = () => {
    //@ts-ignore
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      className="mx-auto  relative bg-white p-20 w-full"
      id="testimonials"
    >
      <div className="mx-auto w-[80%]">
        {" "}
        <h1 className={`${sourceSerif.className} text-primary py-10`}>
          Testimonials
        </h1>
        <Slider
          {...settings}
          ref={(slider) => {
            //@ts-ignore
            sliderRef = slider;
          }}
        >
          {Testimonials?.map(({ desc, image, tag, name }, index) => (
            <div
              className="flex p-2 h-[200px] flex-col items-center rounded-lg"
              key={index}
            >
              <div className="flex mt-4 gap-2 ">
                <img
                  src={image}
                  alt={name}
                  className="rounded-full h-10 w-10 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-sm">{name}</span>
                  <span className="text-secondaryTextColor">{tag}</span>
                </div>
              </div>
              <p className="mb-3 font-normal mt-2">{desc}</p>
            </div>
          ))}
        </Slider>
        <div className="flex items-end justify-end mt-4">
          <div className="flex gap-2 transition-all duration-300 hover:text-gray-300 text-secondaryTextColor">
            <BsArrowLeftCircle
              size={30}
              className="font-thin cursor-pointer"
              onClick={previous}
            />
            <BsArrowRightCircle
              className="font-thin cursor-pointer transition-all  duration-300 hover:text-gray-300"
              onClick={next}
              size={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
