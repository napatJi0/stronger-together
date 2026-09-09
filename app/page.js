"use client";

import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import TopBar from "./components/TopBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch("/api");
        const result = await res.json();

        const list = Array.isArray(result?.data) ? result.data : [];
        const rankedData = list
          .map((member) => ({
            ...member,
            score: Number(member.score ?? 0),
          }))
          .sort((a, b) => b.score - a.score);

        setMembers(rankedData);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
        setMembers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  return (
    <div className="bg-red-100 min-h-screen justify-center">
      <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className=" grid grid-cols-2 mt-5 h-20 flex px-5 gap-2 ">
        <button onClick={() => router.push("/minigame")} className="border border-1 rounded-xl items-center">
          <h1>Mini Games</h1>
        </button>
        <button onClick={() => router.push("/profile")} className="border border-1 rounded-xl items-center">
          <h1>Profile</h1>
        </button>
      </div>

      <div className="p-8">
        <ImageSlider />
      </div>

      <div className="border border-1 h-12 rounded-xl mx-5 flex justify-center items-center px-5">Start Mission</div>
      <div className="border border-1 rounded-xl mt-5 pt-5 pb-5 mx-5 flex justify-center items-center px-5 flex-col gap-5">
        <h1>LEADERBOARD</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-1 w-100 h-80 rounded-2xl flex flex-col pt-5">
            <h3 className="flex justify-center">BEST SCORE</h3>
            <div className="w-40 h-40 mx-auto border border-1 rounded-2xl flex justify-center items-center mt-5">
              <img></img>
            </div>
            <h1></h1>
            <p></p>
            <p></p>
          </div>

          <div className="border border-1 w-100 h-80 rounded-2xl flex flex-col pt-5">
            <h3 className="flex justify-center">BEST IMPROVEMENT</h3>
            <div className="w-40 h-40 mx-auto border border-1 rounded-2xl flex justify-center items-center mt-5">
              <img></img>
            </div>
            <h1></h1>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className="border border-1 mx-5 rounded-2xl flex flex-col pt-5 w-202 pb-10">
          <div className='flex justify-between mx-5'>
            <div>Full Ranking</div>
            <div>{members.length} Members</div>
            </div>
          <table className="border-collapse border border-1n mx-5 mt-5">
            <thead>
              <tr>
                <th className="p-2">Rank</th>
                <th className="p-2">Team Member</th>
                <th className="p-2">Group</th>
                <th className="p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="border border-1 p-2 text-center">Loading...</td>
                </tr>
              ) : members.length > 0 ? (
                members.map((member, index) => (
                  <tr key={`${member.sup_name}-${member.sup_group}-${index}`}>
                    <td className="border border-1 p-2 text-center">{index + 1}</td>
                    <td className="border border-1 p-2 font-bold">{member.sup_name}</td>
                    <td className="border border-1 p-2 text-center">{member.sup_group}</td>
                    <td className=" p-2 text-center">{member.score ?? 0}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="border border-1 p-2 text-center">No data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
