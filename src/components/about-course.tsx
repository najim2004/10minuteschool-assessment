"use client";

import React from "react";

function AboutCourse() {
  return (
    <div id="about">
      <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px]">
        <div className="mt-10 md:mt-0">
          <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
            Course details
          </h2>
          <div className="rounded-lg py-2 md:border md:px-5">
            <details className="mb-0 border-b border-dashed last:border-none">
              <summary className="py-4 cursor-pointer accordion-header">
                <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                  <h2>
                    <b>This IELTS course is for</b>
                  </h2>
                </div>
              </summary>
              <div className="px-0 pb-2 text-gray-500">
                <div className="prose prose-ul:pl-4">
                  <li>
                    Those who aim to go abroad for work or higher education
                  </li>
                  <li>
                    Those who want to apply for permanent residency abroad
                  </li>
                  <li>
                    Those who have appeared for the IELTS exam but are not
                    satisfied with their band score
                  </li>
                  <li>
                    Those who want to improve their reading, writing, listening,
                    and speaking skills through IELTS for work, business, or
                    personal interest
                  </li>
                </div>
              </div>
            </details>
            <details className="mb-0 border-b border-dashed last:border-none">
              <summary className="py-4 cursor-pointer accordion-header">
                <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                  <h2>
                    <b>About the IELTS course</b>
                  </h2>
                </div>
              </summary>
              <div className="px-0 pb-2 text-gray-500">
                <div className="prose prose-ul:pl-4">
                  <p>
                    IELTS certificates are accepted in different higher
                    education institutions in the USA and other English-speaking
                    countries across the globe. This exam tests the ability of
                    the candidates to speak, read, listen and write in English.
                  </p>
                  <br />
                  <p>
                    Many of us are intimidated by English grammar as English is
                    not our first language. Fortunately, IELTS is essentially a
                    language-based test and not grammar-based. To achieve the
                    desired score, you will require four English language
                    skills: reading, writing, listening and speaking. The more
                    proficient a person is in these four areas, the higher their
                    score will be on the IELTS test.
                  </p>
                  <br />
                  <p>
                    To help IELTS examinees improve these four essential English
                    language skills, 10 Minute School has brought a detailed and
                    well-guided{" "}
                    <a
                      href="https://10minuteschool.com/ielts"
                      style={{ color: "blue" }}
                    >
                      IELTS preparation
                    </a>{" "}
                    course. The instructor of this course is Munzereen Shahid
                    (IELTS Band Score 8.5/9), who has recently graduated from
                    the English Department of the world-renowned Oxford
                    University in England.
                  </p>
                  <br />
                  <p>
                    If you enroll in our course, you will receive the book “ঘরে
                    বসে IELTS প্রস্তুতি” by Munzereen Shahid, completely free!
                    Along with the video lectures in the course, you can learn
                    strategies from the book and practice to fully prepare for
                    the IELTS exam. This course also includes IELTS Reading and
                    Listening Mock Tests, which will give you a real exam
                    experience and an understanding of band scores. During
                    practice sessions, expert instructors are available in live
                    classes to solve any problems you may encounter. Therefore,
                    now you can have complete IELTS preparation in one course!
                  </p>
                  <br />
                  <p>
                    To make your IELTS test preparation effortless, efficient,
                    and practical, enroll in "IELTS Course by Munzereen Shahid"
                    today and take yourself one step closer to fulfilling your
                    dreams!
                  </p>
                </div>
              </div>
            </details>
            <details className="mb-0 border-b border-dashed last:border-none">
              <summary className="py-4 cursor-pointer accordion-header">
                <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                  <h2>
                    <b>
                      This IELTS course will help you in the following ways:
                    </b>
                  </h2>
                </div>
              </summary>
              <div className="px-0 pb-2 text-gray-500">
                <div className="prose prose-ul:pl-4">
                  <li>
                    You will be able to prepare effectively from home for both
                    the ‘Academic IELTS’ and ‘General Training IELTS’ modules.
                    This course has separate sections for both modules.
                  </li>
                  <li>
                    You will learn tips, hacks, and techniques according to the
                    question types in the IELTS speaking, reading, listening,
                    and writing tests.
                  </li>
                  <li>
                    You will be able to solve all types of IELTS questions
                    correctly and prepare yourself with pen and paper.
                  </li>
                  <li>
                    Along with watching the videos, you will have lecture
                    sheets, the book "ঘরে বসে IELTS প্রস্তুতি" and Doubt Solving
                    Live Classes for complete preparation.
                  </li>
                  <li>
                    After completing the course, you will be able to enhance
                    your own IELTS preparation by solving the questions in the
                    IELTS Reading and Listening mock tests.
                  </li>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCourse;
