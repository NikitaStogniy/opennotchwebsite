'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/PageTransition';
import ParallaxCard from '../components/ParallaxCard';
import HeroSection from '../components/HeroSection';
import { useI18n } from '../i18n/I18nContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FunctionsPage() {
  const { t } = useI18n();
  const gridRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      title: t.features.fileDropZone.title,
      description: t.features.fileDropZone.description,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'from-blue-500 to-cyan-500',
      icon: '📁'
    },
    {
      id: 2,
      title: t.features.calculator.title,
      description: t.features.calculator.description,
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'from-purple-500 to-pink-500',
      icon: '🧮'
    },
    {
      id: 3,
      title: t.features.quickAccess.title,
      description: t.features.quickAccess.description,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'from-green-500 to-emerald-500',
      icon: '⚡'
    },
    {
      id: 4,
      title: t.features.customizable.title,
      description: t.features.customizable.description,
      gradient: 'from-orange-500/10 to-amber-500/10',
      borderGradient: 'from-orange-500 to-amber-500',
      icon: '🎨'
    },
    {
      id: 5,
      title: t.features.privacy.title,
      description: t.features.privacy.description,
      gradient: 'from-red-500/10 to-rose-500/10',
      borderGradient: 'from-red-500 to-rose-500',
      icon: '🔒'
    },
    {
      id: 6,
      title: t.features.lightweight.title,
      description: t.features.lightweight.description,
      gradient: 'from-indigo-500/10 to-violet-500/10',
      borderGradient: 'from-indigo-500 to-violet-500',
      icon: '🪶'
    },
  ];

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.feature-card');

    cards.forEach((card) => {
      const icon = card.querySelector('.feature-icon');
      const border = card.querySelector('.feature-border');

      // Hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.3, ease: 'back.out' });
        gsap.to(border, { opacity: 1, duration: 0.3 });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'back.out' });
        gsap.to(border, { opacity: 0, duration: 0.3 });
      });

      // 3D tilt effect
      card.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.3,
          transformPerspective: 1000,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <PageTransition>
      <HeroSection
        title={t.features.title}
        subtitle={t.features.subtitle}
        ctaText="Download Now"
        ctaLink="https://github.com/NikitaStogniy/OpenNotch"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ParallaxCard
              key={feature.id}
              speed={0.3 + index * 0.05}
              className={`feature-card relative p-8 bg-gradient-to-br ${feature.gradient} rounded-3xl border-2 border-gray-200/50 hover:border-gray-300 transition-all group cursor-pointer`}
              style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              <div className={`feature-border absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.borderGradient} opacity-0 transition-opacity rounded-t-3xl`} />

              <div className="relative" style={{ transform: 'translateZ(50px)' } as React.CSSProperties}>
                <div className="feature-icon text-6xl mb-4 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </ParallaxCard>
          ))}
        </div>

        {/* Additional section with scroll reveal */}
        <div className="mt-32 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium mb-6">
            Open Source & Free Forever
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Join the Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Built with love by developers, for developers. Contribute, suggest features, or just star us on GitHub!
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
