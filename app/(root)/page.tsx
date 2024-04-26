"use client";
import Introduction from "../components/homeComponents/Introduction";
import Quote from "../components/homeComponents/Quote";
import Skills from "../components/homeComponents/Skills";


export default function Home() {
  return (
    <div className="relative w-full ">
      <Introduction />
      <Quote />
      <Skills />
    </div>
  );
}
