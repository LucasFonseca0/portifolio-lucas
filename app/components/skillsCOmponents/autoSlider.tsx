import { useEffect, useRef, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28","red"];
const delay = 2500;

export default function AutoSlider() {
  const [index, setIndex] = useState(0);

  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className=" max-w-[500px] mx-auto">
      <div
        className=" whitespace-nowrap transition-transform ease-in-out duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide inline-block h-[400px] w-full rounded-40px"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className=" text-center">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={` inline-block h-20px w-20px rounded-full cursor-pointer mt-15px mx-7px ${
              index === idx ? "bg-purple-600" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
