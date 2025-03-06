"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setVisible(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-6 z-50 ${visible ? "block" : "hidden"}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
