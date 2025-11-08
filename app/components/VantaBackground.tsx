'use client';

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // Dynamically import VANTA and THREE to avoid SSR issues
      const initVanta = async () => {
        const THREE = await import('three');
        const VANTA = await import('vanta/dist/vanta.waves.min');

        // @ts-expect-error - Vanta types are not perfect
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x1a1a2e,
          shininess: 30.00,
          waveHeight: 15.00,
          waveSpeed: 0.60,
          zoom: 0.85,
        });

        setVantaEffect(effect);
      };

      initVanta();
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-20"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
