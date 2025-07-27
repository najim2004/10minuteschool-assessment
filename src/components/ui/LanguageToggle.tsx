"use client";

import { LanguageToggleIcon } from "@/assets/icons";
import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"bn" | "en">("bn");

  return (
    <span
      onClick={() => setLang((prev) => (prev === "bn" ? "en" : "bn"))}
      className="hidden cursor-pointer items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50 md:flex"
    >
      {/* SVG Icon */}
      <div className="hidden md:block">
        <LanguageToggleIcon />
      </div>
      <span>{lang === "bn" ? "বাং" : "EN"}</span>
    </span>
  );
}
