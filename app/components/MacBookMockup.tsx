"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import VantaBackground from "./VantaBackground";

interface MacBookMockupProps {
  children: ReactNode;
}

export default function MacBookMockup({ children }: MacBookMockupProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 relative overflow-hidden">
      {/* Vanta Waves Background */}
      <VantaBackground />

      {/* 2D Screen Container - 99% of viewport */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[99vw] h-[99vh] z-10"
      >
        {/* Simple 2D Screen with subtle border */}
        <div className="relative w-full h-full bg-black/5 rounded-lg border border-gray-300/50 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Screen Content */}
          <div className="w-full h-full overflow-auto">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
