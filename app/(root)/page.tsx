"use client"

import { ParticleBackground } from "../components/particle";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative h-52 w-full overflow-hidden">
        <ParticleBackground />
      </div>
      <h1>yes</h1>
    </div>
  );
}