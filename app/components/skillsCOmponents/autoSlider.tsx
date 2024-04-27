import SkillsSVG from "@/app/SVGs/SkillsSVG";
import { useEffect, useRef, useState } from "react";

const AutoSlider: React.FC = () => {
  const [index, setIndex] = useState<number>(3);
  const logoNames: LogoName[] = ["typescript", "next", "nest", "tailwind", "database","react","mongodb","docker","git"];
  const delay = 1500;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) =>
        prevIndex === logoNames.length - 1 ? 0 : prevIndex + 1
      ), delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return ( 
    <div className=" mx-auto w-full flex items-center justify-center overflow-hidden relative">
      <div className="whitespace-nowrap w-20 sm:w-28 md:w-40   transition-transform ease-in-out duration-700" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {logoNames.map((logoName, idx) => (
          <div key={idx} className="inline-block">
            <SkillsSVG logoName={logoName} className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 "  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;