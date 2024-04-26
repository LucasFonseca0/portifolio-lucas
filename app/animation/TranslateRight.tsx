import { useRef } from "react";
import { useInView } from "framer-motion";


export default function TranslateRight({ children }:any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,amount:1 });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="block  "
      >
        {children}
      </span>
    </div>
  );
}

