"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_RED } from "@/lib/brand";

export function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ultra-snappy microsecond intro sequence: auto dismiss after 700ms
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="exit-store-intro"
          initial={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none"
        >
          {/* Centered red italic "exit store" text */}
          <div className="relative flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <h1
                className="font-display italic font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-none uppercase text-center"
                style={{ color: BRAND_RED }}
              >
                EXIT STORE
              </h1>
            </motion.div>

            {/* Left-to-right animated red accent hairline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.12, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="w-full h-[2px] bg-red mt-3 sm:mt-4"
            />

            {/* Micro index tag */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.25 }}
              className="font-mono text-[10px] sm:text-xs text-white/50 tracking-widest uppercase mt-2 self-end"
            >
              ©2026
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
