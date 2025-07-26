import React from "react";
import Image from "next/image";

interface ChecklistItem {
  id: string;
  icon: string;
  text: string;
  list_page_visibility: boolean;
}

const checklistData: ChecklistItem[] = [
  {
    id: "1",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
    text: "Total Enrolled 32995",
    list_page_visibility: true,
  },
  {
    id: "2",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png",
    text: "Time Required 50 hours",
    list_page_visibility: true,
  },
  {
    id: "3",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
    text: "54 Videos",
    list_page_visibility: true,
  },
  {
    id: "4",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
    text: "10 Reading & 10 Listening Mocktests",
    list_page_visibility: true,
  },
  {
    id: "5",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
    text: "38 Lecture Sheets",
    list_page_visibility: true,
  },
  {
    id: "6",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png",
    text: "25 Video Lectures",
    list_page_visibility: true,
  },
  {
    id: "7",
    icon: "https://cdn.10minuteschool.com/images/Landing_page/pdp_icon_flashcard.png",
    text: "1 Free Hardcopy Book Delivered",
    list_page_visibility: true,
  },
  {
    id: "8",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png",
    text: "Facebook Support Group",
    list_page_visibility: true,
  },
  {
    id: "9",
    icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
    text: "Course Validity Lifetime",
    list_page_visibility: true,
  },
];

interface ChecklistProps {
  items: ChecklistItem[];
}

function Checklist({ items }: ChecklistProps) {
  return (
    <div className="grid py-2 md:p-4">
      <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
      {items.map((item) => (
        <div key={item.id}>
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
                src={item.icon}
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {item.text}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Checklist;
