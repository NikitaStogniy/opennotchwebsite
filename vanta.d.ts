declare module 'vanta/dist/vanta.waves.min' {
  import * as THREE from 'three';

  export interface VantaWavesConfig {
    el: HTMLElement | null;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
  }

  export interface VantaEffect {
    destroy: () => void;
  }

  export default function WAVES(config: VantaWavesConfig): VantaEffect;
}
