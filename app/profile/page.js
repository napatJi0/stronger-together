"use client";

import TopBar from "../components/TopBar";
import SupMemberCard from "../components/SupMemberCard";
import { useState } from "react";

export default function Profile() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [selectedGroup, setSelectedGroup] = useState("A");

	const groupOptions = ["A", "B", "C"];

	return (
		<div className="bg-red-100 min-h-screen justify-center">
			<style>{`
				.member-scroll {
					scrollbar-width: thin;
					scrollbar-color: transparent transparent;
				}
				.member-scroll::-webkit-scrollbar {
					width: 6px;
					height: 6px;
					background: transparent;
				}
				.member-scroll::-webkit-scrollbar-track {
					background: transparent;
				}
				.member-scroll::-webkit-scrollbar-thumb {
					background: transparent;
					border-radius: 9999px;
					transition: background 0.2s ease;
				}
			`}</style>
			<TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="grid grid-cols-5 mt-5 mx-5 h-135 gap-5">
			    <div className="border border-1 rounded-xl col-span-2 flex flex-col  gap-5">
                    <div className="border border-1 w-100 h-100 mt-5 mx-auto rounded-lg"></div>
                    <div className="border border-1 h-20 mx-10 rounded-lg"></div>
                </div>
                <div className="border border-1 rounded-xl col-span-3 flex flex-col gap-5 min-h-0">
                    <div className="flex justify-between p-5">
                        <div className="flex flex-col">
                            <h1>Supervisor Members</h1>
                            <p>Group __ - __ members</p>
                        </div>
                        <div className="flex flex-row my-auto gap-2">
                            {groupOptions.map((group) => (
                                <button
                                    key={group}
                                    type="button"
                                    onClick={() => setSelectedGroup(group)}
                                    className={`border flex items-center justify-center w-10 h-10 rounded-lg font-bold transition-colors ${
                                        selectedGroup === group
                                            ? "bg-orange-500 text-white border-orange-500"
                                            : "bg-white text-gray-700 hover:bg-orange-100"
                                    }`}
                                >
                                    {group}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mx-5 flex-1 min-h-0">
                        <h3>Team Members</h3>
                        <div className="member-scroll flex-1 rounded-lg mb-5 overflow-y-auto">
                            <div className="flex flex-col gap-3">
                                <SupMemberCard />
                                <SupMemberCard />
                                <SupMemberCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
}

