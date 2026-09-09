"use client";

import TopBar from "../components/TopBar";
import ImageSlider from "../components/ImageSlider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Mission() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-red-100 min-h-screen justify-center">
        <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="p-8">
            <ImageSlider />
        </div>

        <div className="border border-1 h-30 px-10 gap-10 mx-15 rounded-xl flex flex-row items-center">
            <div className="border h-20 w-20"></div>
            <p>asdfasdf</p>
        </div>

        <div className="border border-1 mt-5 h-30 px-10 gap-10 mx-15 rounded-xl flex flex-row items-center">
            <div className="border h-20 w-20"></div>
            <p>asdfasdf</p>
        </div>

        <div className="border border-1 mt-5 h-30 px-10 gap-10 mx-15 rounded-xl flex flex-row items-center">
            <div className="border h-20 w-20"></div>
            <p>asdfasdf</p>
        </div>

    </div>
  );
}
