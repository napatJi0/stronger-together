"use client";

import TopBar from "../components/TopBar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Handbook() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const router = useRouter();

	return (
		<div className="bg-red-100 min-h-screen justify-center">
			<TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			<div className="p-8 flex items-center justify-center">
				<div className="border border-1 rounded-xl p-8 w-full max-w-3xl text-center">
					<h1 className="text-2xl font-bold">Information</h1>
					<p className="text-gray-500 mt-2">This page is intentionally blank.</p>
				</div>
			</div>
		</div>
	);
}

