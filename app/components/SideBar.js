"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[350px] bg-white z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <img
                src="/logo/logo.png"
                alt="Logo"
                className="h-20 w-20 object-contain"
              />

              <div>
                <div className="text-sm font-extrabold">STRONGER TOGETHER</div>
                <div className="text-xs text-gray-500 mt-1">MENU</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-6 h-8 rounded-lg border flex items-center justify-center my-auto"
            >
              <X size={15} />
            </button>
          </div>

          {/* Menu */}
          <div className="mt-8 space-y-4">
            <StageCard
              title="SUIT UP"
              subtitle="CURRENT STAGE"
            />

            <MenuCard
              title="LOBBY"
              subtitle="MAIN HALL"
              onClick={() => router.push("/")}
            />

            <MenuCard
              title="MISSION"
              subtitle="3 STAGES"
              onClick={() => router.push("/mission")}
            />

            <MenuCard
              title="HANDBOOK"
              subtitle="COMING SOON"
              onClick={() => router.push("/handbook")}
            />

            <MenuCard
              title="MINI GAMES"
              subtitle="ARCADE"
              onClick={() => router.push("/minigame")}
            />

            <MenuCard
              title="PROFILE"
              subtitle="SUPERVISOR"
              onClick={() => router.push("/profile")}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

function MenuCard({ title, subtitle, active = false, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick && onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`rounded-3xl border p-4 transition-all cursor-pointer focus:outline-none
      ${
        active
          ? "border-violet-500 shadow-md"
          : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-3 h-3 rounded-full ${
            active
              ? "bg-violet-500"
              : "bg-violet-400"
          }`}
        />

        <div>
          <div className="text-2xl font-black">
            {title}
          </div>

          <div className="text-xs text-gray-500 uppercase">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

// StageCard: subtitle above title (used for stage entries)
function StageCard({ title, subtitle, active = false, onClick }) {
  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className="flex items-center gap-3 cursor-pointer"
    >
        <div className={`w-3 h-3 rounded-full`}/>

        <div>
            <div className="text-xs text-gray-500 uppercase">
            {subtitle}
            </div>

            <div className="text-2xl font-black">
            {title}
            </div>
        </div>
    </div>
  );
}