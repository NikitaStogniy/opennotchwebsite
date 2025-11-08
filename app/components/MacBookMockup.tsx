"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import VantaBackground from "./VantaBackground";

interface MacBookMockupProps {
  children: ReactNode;
}

export default function MacBookMockup({ children }: MacBookMockupProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Vanta Waves Background */}
      <VantaBackground />

      {/* MacBook Container with SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl z-10"
      >
        <div className="relative">
          {/* MacBook SVG as background */}
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <Image
              src="/Macbook.svg"
              alt="MacBook Pro"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />

            {/* Screen Content Area - positioned absolutely within the SVG */}
            <div className="absolute inset-0 flex items-start justify-center">
              <div className="w-[55%] h-[73%] mt-[45px] rounded-[10px] overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
