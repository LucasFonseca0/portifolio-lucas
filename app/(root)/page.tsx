"use client";
import Introduction from "../components/homeComponents/Introduction";
import Skills from "../components/homeComponents/Skills";


export default function Home() {
  return (
    <div className="relative bg-white w-full ">
      <Introduction />
     
      <Skills />
    </div>
  );
}
