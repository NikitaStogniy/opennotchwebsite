'use client';

import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'h1'
}: SplitTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: 'chars,words',
      tagName: 'span',
    });

    gsap.fromTo(
      split.chars,
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      split.revert();
    };
  }, [children, delay]);

  return (
    <Tag ref={textRef as any} className={className} style={{ perspective: '1000px' }}>
      {children}
    </Tag>
  );
}
