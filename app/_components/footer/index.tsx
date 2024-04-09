"use client";

import React from "react";
import Contact from "../contact";

interface Link {
  name: string;
  id: string;
}

interface SocialMedia {
  name: string;
  link: string;
}

const Footer = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links: Link[] = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About us",
      id: "about",
    },

    {
      name: "services",
      id: "services",
    },

    {
      name: "projects",
      id: "work",
    },

    {
      name: "testimonials",
      id: "testimonials",
    },
  ];

  const socialMedia: SocialMedia[] = [
    {
      name: "Linked In",
      link: "https:linkedin.com",
    },
    {
      name: "X (Twitter)",
      link: "https://twitter.com/home",
    },
    {
      name: "Facebook",
      link: "https://facebook.com/",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <footer className="bg-white relative">
      <Contact />
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className=" grid  md:flex  md:justify-between items gap-8 grid-cols-2   pt-8 sm:grid-cols-2  lg:pt-16">
          <div>
            <img src="/logo.svg" alt="" />
            <p className=" w-[150px] md:w-[300px] mt-4 tracking-wide text-[12px] text-secondaryTextColor">
              We uphold the highest ethical standards and conduct ourselves with
              integrity <br></br> and respect.
            </p>
          </div>

          <div>
            <p className="font-medium text-secondaryTextColor uppercase">
              Quick Links
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#/"
                    className=" text-[12px] text-black uppercase transition hover:opacity-75"
                    onClick={() => handleSmoothScroll(`${link.id}`)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium  text-secondaryTextColor uppercase">
              social
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              {socialMedia.map(({ name, link }, index) => (
                <li key={index}>
                  <a
                    href={`${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-[12px] text-black  uppercase transition hover:opacity-75"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium  text-secondaryTextColor uppercase">
              contact
            </p>

            <ul className="mt-6  space-y-4 text-sm">
              <li>
                <p className=" text-[12px] text-black  uppercase transition hover:opacity-75">
                  +250 784 170 771
                </p>
              </li>
              <li>
                <p className=" text-[12px] text-black   transition hover:opacity-75">
                  thegreenrealtors@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between text-secondaryTextColor">
          <p className="text-xs">&copy; 2024. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
