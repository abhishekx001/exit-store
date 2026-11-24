"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/brand";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (BRAND.announcements.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BRAND.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 bg-paper border-b border-hair text-ink flex items-center justify-center px-4 select-none relative z-30">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] uppercase tracking-mono text-muted text-center"
        >
          {BRAND.announcements[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
