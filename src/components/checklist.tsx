"use client";

import React from "react";
import Image from "next/image";

function Checklist() {
  return (
      <div className="grid py-2 md:p-4">
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              Total Enrolled 32995
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              Time Required 50 hours
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              54 Videos
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              10 Reading & 10 Listening Mocktests
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              38 Lecture Sheets
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              25 Video Lectures
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/Landing_page/pdp_icon_flashcard.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              1 Free Hardcopy Book Delivered
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              Facebook Support Group
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3 leading-5">
            <div
              className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: 1 }}
            >
              <Image
                alt="icon"
                loading="lazy"
                width={20}
                height={20}
                style={{ color: "transparent" }}
                src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              Course Validity Lifetime
            </h4>
          </div>
        </div>
      </div>
  );
}

export default Checklist;
