"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("EN");

  return (
    <div className="relative flex items-center p-1 rounded-2xl bg-[#1d2c2a] border border-[#2d3d3a] w-[110px]">
      <div
        className={`absolute top-1 bottom-1 w-[48px] rounded-xl bg-[#d8a0ea] transition-all duration-300 ${
          lang === "EN" ? "left-1" : "left-[57px]"
        }`}
      />

      <button
        onClick={() => setLang("EN")}
        className={`relative z-10 flex-1 py-2 text-sm font-medium ${
          lang === "EN" ? "text-black" : "text-gray-400"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLang("TH")}
        className={`relative z-10 flex-1 py-2 text-sm font-medium ${
          lang === "TH" ? "text-black" : "text-gray-400"
        }`}
      >
        ไทย
      </button>
    </div>
  );
}
``