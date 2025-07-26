"use client";
import React, { useEffect, useState } from "react";
import Checklist from "./checklist";
import CallToAction from "./call-to-action";
import Contact from "./contact";

interface StickyChecklistProps {
  checklistData: {
    id: string;
    icon: string;
    text: string;
    list_page_visibility: boolean;
  }[];
  cta_text: {
    name: string;
    value: string;
  };
}

export default function StickyChecklist({ checklistData, cta_text }: StickyChecklistProps) {
  const [isCheckList1Visible, checklist1visible] = useState(true);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMdUp(window.innerWidth >= 768);
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isMdUp) {
      checklist1visible(true);
      return;
    }

    const checklist1 = document.getElementById("checklist-1");
    if (!checklist1) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        checklist1visible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(checklist1);

    return () => observer.disconnect();
  }, [isMdUp]);

  return (
    <div
      id="checklist-2"
      className={`sticky top-[112px] transition-opacity duration-300 bg-white
        ${
          isMdUp
            ? isCheckList1Visible
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
            : "md:hidden"
        }
      `}
    >
      <div className="md:border md:p-4">
        <CallToAction name={cta_text.name}/>
        <Checklist items={checklistData} />
      </div>
      <Contact />
    </div>
  );
}
