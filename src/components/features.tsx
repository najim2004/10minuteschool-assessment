"use client";

import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div id="features">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          How the course is laid out
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-row items-start gap-3 m-1">
            <div>
              <div
                className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="৫০+ ভিডিও লেকচার"
                  loading="lazy"
                  width={36}
                  height={36}
                  style={{ color: "transparent" }}
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                ৫০+ ভিডিও লেকচার
              </h2>
              <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের
                ধরন নিয়ে in-depth আলোচনা
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start gap-3 m-1">
            <div>
              <div
                className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="৩৮টি লেকচার শিট"
                  loading="lazy"
                  width={36}
                  height={36}
                  style={{ color: "transparent" }}
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                ৩৮টি লেকচার শিট
              </h2>
              <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর
                করার স্ট্র্যাটেজি এবং 600+ Vocabulary
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start gap-3 m-1">
            <div>
              <div
                className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="রিডিং এন্ড লিসিনিং মক টেস্ট"
                  loading="lazy"
                  width={36}
                  height={36}
                  style={{ color: "transparent" }}
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                রিডিং এন্ড লিসিনিং মক টেস্ট
              </h2>
              <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start gap-3 m-1">
            <div>
              <div
                className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="ডাউট সল্ভিং লাইভ ক্লাস"
                  loading="lazy"
                  width={36}
                  height={36}
                  style={{ color: "transparent" }}
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                ডাউট সল্ভিং লাইভ ক্লাস
              </h2>
              <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর
                সুযোগ
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
