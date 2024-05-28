import React, { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

const TranslateAnimation = {
  TranslateRight: ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.69 });

    return (
      <div ref={ref} className="relative overflow-hidden">
        <span
          className="block"
          style={{
            visibility: isInView ? "visible" : "hidden",
            transform: isInView ? "none" : `translateX(-100px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.28s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </span>
      </div>
    );
  },

  TranslateLeft: ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.69 });

    return (
      <div ref={ref} className="relative overflow-hidden">
        <span
          className="block"
          style={{
            visibility: isInView ? "visible" : "hidden",
            transform: isInView ? "none" : `translateX(100px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.28s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </span>
      </div>
    );
  },

  TranslateUp: ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.69 });

    return (
      <div ref={ref} className="relative overflow-hidden">
        <span
          className="block"
          style={{
            visibility: isInView ? "visible" : "hidden",
            transform: isInView ? "none" : `translateY(50px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </span>
      </div>
    );
  },
};

export default TranslateAnimation;
