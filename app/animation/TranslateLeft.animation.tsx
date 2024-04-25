import { useRef } from "react";
import { useInView } from "framer-motion";


export default function TranslateLeft({ children }:any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="block  "
      >
        {children}
      </span>
    </div>
  );
}

