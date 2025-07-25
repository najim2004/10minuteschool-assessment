"use client";

import React from "react";
import Image from "next/image";
import CallToAction from "./call-to-action";
import Checklist from "./checklist";
import Contact from "./contact";
import Trailer from "./trailer";
import { PlayButtonSvg, LeftArrowSvg, RightArrowSvg } from "@/assets/icons";

function CourseInfo() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="skills-landing"
      className="min-h-[300px] md:min-h-[300px]"
    >
      <div className="mx-auto max-w-[1200px] relative flex flex-col p-4 gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-2 md:order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          {/* <div className="block mt-4 md:mt-0 md:hidden">
            <div className="relative overflow-hidden bg-black youtube-video aspect-video">
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <PlayButtonSvg />
                </span>
                <div className="thumb-wrap">
                  <div>
                    <div
                      className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{
                        fontSize: "0px",
                        objectFit: "cover",
                        opacity: 1,
                      }}
                    >
                      <Image
                        alt="image"
                        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                        width={867}
                        height={480}
                        priority
                        className="w-full"
                        style={{ color: "transparent", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
                  <LeftArrowSvg />
                </div>
                <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
                  <RightArrowSvg />
                </div>
              </div>
            </div>
          </div> */}
          <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
            IELTS Course by Munzereen Shahid
          </h1>
          <div className="mb-2">
            <button className="flex flex-row flex-wrap gap-2 text-white">
              <span className="inline-block">
                <Image
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="Course rating badge"
                  width={130}
                  height={100}
                  priority
                  style={{ color: "transparent" }}
                />
              </span>
              <span className="inline-block text-sm md:text-base">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </button>
          </div>
          <div>
            <div
              className="text-gray-400"
              style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
            >
              <div>
                <p className="tenms__paragraph" dir="ltr">
                  <span style={{ whiteSpace: "pre-wrap" }}>
                    Get complete preparation of Academic IELTS and General
                    Training IELTS in one course! Join our IELTS Course today to
                    achieve your desired band score under the guidance of the
                    best IELTS Instructor in the country.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id='checklist-1' className="w-full md:max-w-[330px] lg:max-w-[400px] order-1 md:order-2 md:bg-white right-0 md:top-[50px] md:absolute hidden md:block">
          <div className="md:sticky md:top-[112px]">
            <div className="md:border">
              <div className="md:p-1">
                <Trailer />
              </div>
              <CallToAction className="p-4" />
              <Checklist />
            </div>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseInfo;
