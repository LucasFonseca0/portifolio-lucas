"use client";
import Introduction from "../components/Introduction";
import Quote from "../components/Quote";
import Skills from "../components/Skill";


export default function Home() {
  return (
    <div className="relative w-full ">
      <Introduction />
      <Quote />
      <Skills />
    </div>
  );
}
