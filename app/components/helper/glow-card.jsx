"use client";  // Ensure it's a client component

import { useEffect } from 'react';

const GlowCard = ({ children , identifier }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
      const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

      if (CONTAINER && CARDS) {
        // Your existing logic here
      }
    }
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit border border-[#2a2e5a]`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
