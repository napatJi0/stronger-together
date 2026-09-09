"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sliderPosition = mounted
    ? theme === "dark"
      ? "left-[57px]"
      : "left-1"
    : "left-1";

  const sunActive = mounted ? theme === "light" : false;
  const moonActive = mounted ? theme === "dark" : false;

  return (
    <div className="relative flex items-center p-1 rounded-2xl bg-[#1d2c2a] border border-[#2d3d3a] w-[110px]">
      <div
        className={`absolute top-1 bottom-1 w-[48px] rounded-xl bg-[#d8a0ea] transition-all duration-300 ${sliderPosition}`}
      />

      <button
        onClick={() => setTheme("light")}
        className={`relative z-10 flex flex-1 justify-center py-2 ${
          sunActive ? "text-black" : "text-gray-400"
        }`}
      >
        <Sun size={18} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`relative z-10 flex flex-1 justify-center py-2 ${
          moonActive ? "text-black" : "text-gray-400"
        }`}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}