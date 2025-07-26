import { FeatureExplanationValue, Section } from "@/types";
import Image from "next/image";
import React from "react";

interface CourseExclusiveFeatureProps extends Section {
  values: FeatureExplanationValue[];
}

function FeatureExplanations({
  type,
  order_idx,
  name,
  values,
}: CourseExclusiveFeatureProps) {
  return (
    <div id={type} style={{ order: order_idx }}>
      <div>
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-xl font-semibold leading-[30px] text-black">
            {name || "Course Exclusive Feature"}{" "}
          </h2>
          <div className="grid grid-cols-1 px-5 border divide-y rounded-md">
            {values.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
                    {feature.title}
                  </h2>

                  {feature.checklist.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="15"
                        fill="none"
                        viewBox="0 0 19 15"
                      >
                        <path
                          fill="#6294F8"
                          stroke="#6294F8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.893"
                          d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                        />
                      </svg>
                      <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <div
                    className="mb-4 mx-auto max-w-[350px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    {feature.file_type === "image" && feature.file_url && (
                      <Image
                        alt={feature.title}
                        loading="lazy"
                        width={250}
                        height={200}
                        style={{ color: "transparent" }}
                        src={feature.file_url}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureExplanations;
