"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_SLIDES = [
  {
    id: "slide-1",
    image: "/images/5-sleeve/12-899.jpeg",
    tag: "Drop 09 / Live Now",
    headline: "NEW DROP",
    subline: "Heavyweight 5-Sleeve silhouettes from ₹799",
    ctaText: "Shop Now",
    ctaLink: "/category/5-sleeve",
  },
  {
    id: "slide-2",
    image: "/images/Hoodies/1-1199.jpeg",
    tag: "Fleece Edition",
    headline: "HOODIES",
    subline: "400 GSM brushed fleece drop-shoulder hoodies",
    ctaText: "Explore Hoodies",
    ctaLink: "/category/hoodies",
  },
  {
    id: "slide-3",
    image: "/images/pants/1-1149.jpeg",
    tag: "Tactical Utility",
    headline: "CARGOS & PANTS",
    subline: "Relaxed baggy parachute silhouettes from ₹1,149",
    ctaText: "View Pants",
    ctaLink: "/category/pants",
  },
  {
    id: "slide-4",
    image: "/images/shirts/1-1199.jpeg",
    tag: "Summer Studio",
    headline: "RESORT SHIRTS",
    subline: "Textured camp collar open weave shirts",
    ctaText: "Explore Shirts",
    ctaLink: "/category/shirts",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative w-full px-3 sm:px-6 lg:px-10 pt-2 pb-4 select-none">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] rounded-lg overflow-hidden bg-tile flex flex-col justify-end p-5 sm:p-10 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Hero Overlay Content (Exact Stitch spec) */}
          <div className="relative z-10 flex flex-col gap-2 max-w-xl">
            {/* Tag Pill with pulsing dot */}
            <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded bg-red text-white font-mono text-[10px] sm:text-xs uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{slide.tag}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-white font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none mt-1">
              {slide.headline}
            </h1>

            {/* Subline */}
            <p className="text-white/85 font-body text-xs sm:text-sm font-medium">
              {slide.subline}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={slide.ctaLink}
                className="h-10 px-6 flex items-center justify-center bg-red text-white font-mono font-bold text-xs uppercase rounded active:scale-95 transition-transform shadow-md"
              >
                {slide.ctaText}
              </Link>
              <Link
                href="/shop"
                className="h-10 px-5 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-mono font-bold text-xs uppercase rounded transition-colors"
              >
                Lookbook
              </Link>
            </div>

            {/* Segmented Carousel Bars (Stitch design) */}
            <div className="flex items-center gap-1.5 pt-4">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    current === idx ? "bg-red" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
