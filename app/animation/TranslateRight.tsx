import React, { useRef } from "react";
import { useInView } from "framer-motion";

export default function TranslateRight({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  // Suponha que a largura do elemento seja conhecida (ajuste conforme necessário)
  const elementWidth = 100; // Exemplo: largura do elemento em pixels

  return (
    <div ref={ref}>
      <span
        className="block"
        style={{
          transform: isInView ? "none" : `translateX(${elementWidth / 2}px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}
