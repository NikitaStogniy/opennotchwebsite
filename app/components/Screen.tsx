'use client';

import { ReactNode } from 'react';
import InteractiveNotch from './InteractiveNotch';

interface ScreenProps {
  children: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Interactive Notch */}
      <InteractiveNotch />

      {/* Main Content Area */}
      <div className="relative w-full h-full pt-16 md:pt-20 overflow-auto">
        {children}
      </div>

      {/* macOS-style Menu Bar (optional decorative element) */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-md border-b border-gray-200/50 flex items-center px-4 gap-4 z-40">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
