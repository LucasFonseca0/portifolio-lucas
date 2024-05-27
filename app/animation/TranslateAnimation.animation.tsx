import React, { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

const TranslateAnimation = {
  TranslateRight: ({ children }:{children:ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });

    
    
    return (
        <div ref={ref}>
        <span
          className="block"
          style={{
              transform: isInView ? "none" : `translateX(-100px)`,
              opacity: isInView ? 1 : 0,
              transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            >
          {children}
        </span>
      </div>
    );
},

TranslateLeft: ({ children }:{children:ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });
    const elementWidth = 100; 

    return (
      <div ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : `translateX(${elementWidth / 2}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="block"
        >
          {children}
        </span>
      </div>
    );
  },

  TranslateUp: ({ children }:{children:ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });

    const elementHeight = 100;

    return (
      <div ref={ref}>
        <span
          className="block"
          style={{
            transform: isInView ? "none" : `translateY(${elementHeight / 2}px)`,
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
