"use client";

import Sidebar from "./SideBar";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function TopBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="border border-1 mt-5 h-20 rounded-xl mx-5 flex justify-between px-5">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-row">
        <img
          src="/img/logo/logo.png"
          alt="Logo"
          className="cursor-pointer h-14 my-auto"
          onClick={() => setSidebarOpen(true)}
        />
        <div className="ml-4 grid grid-rows-2 my-auto">
          <div>Stonger Together</div>
          <div>Together, We Go Further</div>
        </div>
      </div>

      <div className="flex flex-row gap-2 my-auto">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
