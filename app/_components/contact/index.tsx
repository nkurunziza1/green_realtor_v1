"use client";
import React from "react";
import { sourceSerif } from "@/app/_utils";
import ButtonComp from "../button";

const Contact = () => {
  return (
    <section
      className="contact relative flex flex-col md:flex-row md:justify-between max-w-screen-xl space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8 w-full mx-auto"
      id="contact"
    >
      <div>
        <h1 className=" text-[12px] font-semibold text-primary uppercase  mb-4">
          Reach Out
        </h1>
        <h2
          className={`${sourceSerif.className} text-primary flex-grow w-[400px] text-4xl`}
        >
          Let’s start something great together!
        </h2>
      </div>

      <form action="" className="flex flex-col w-full md:w-[50%]">
        <div className="input-wrapper">
          <input type="text" />
          <label>Full Names</label>
        </div>
        <div className="input-wrapper">
          <input type="text" />
          <label>Your email Address</label>
        </div>
        <div className="input-wrapper">
          <input type="text" />
          <label>Your phone number</label>
        </div>
        <div className="input-wrapper">
          <textarea />
          <label>Message</label>
        </div>
        <div className="flex items-end md:justify-end">
          <ButtonComp className="uppercase">send message</ButtonComp>
        </div>
      </form>

      <style jsx>{`
        .input-wrapper {
          position: relative;
          margin-bottom: 20px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: none;
          border-bottom: 1px solid #ccc; /* Border bottom style */
          transition: border-bottom-color 0.3s ease; /* Smooth transition */
          font-size: 16px;
          margin-top: 10px;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-bottom-color: #0a641b; /* Change border bottom color on focus */
        }

        input:focus + label,
        textarea:focus + label {
          transform: translateY(-20px); /* Move label up */
          font-size: 12px;
          color: #0a641b; /* Change label color on input value */
        }

        label {
          position: absolute;
          top: 10px;
          left: 0;
          font-size: 12px;
          color: #747474;
          transition: transform 0.3s ease, font-size 0.3s ease, color 0.3s ease; /* Smooth transition */
        }
      `}</style>
    </section>
  );
};

export default Contact;
