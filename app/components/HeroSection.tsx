'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Subtitle fade in
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out',
          }
        );
      }

      // CTA fade in
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Background gradient animation
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          backgroundPosition: '200% 200%',
          duration: 20,
          repeat: -1,
          ease: 'none',
        });
      }

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        y: 200,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '0% 0%',
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <SplitText
          className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-8"
          delay={0.1}
        >
          {title}
        </SplitText>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 opacity-0"
        >
          {subtitle}
        </p>

        {ctaText && ctaLink && (
          <div ref={ctaRef} className="opacity-0">
            <MagneticButton
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-medium text-lg shadow-xl hover:shadow-2xl"
            >
              {ctaText}
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </MagneticButton>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}
