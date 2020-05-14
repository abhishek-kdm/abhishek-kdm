import { keyframes } from 'styled-components';

// glitches per cycle (animation duration).
const gpc = 21;
const randomPercent = () => `${Math.round(Math.random() * 100)}%`;

const glitchAnimation = () => Array(gpc)
  .fill(null)
  .map((_, i) => `${i * Math.round(100 / (gpc - 1))}% {
    clip-path: inset(${randomPercent()} 0 ${randomPercent()} 0);
  }`);

export const glitchAnimationBefore = keyframes`${glitchAnimation()}`;
export const glitchAnimationAfter = keyframes`${glitchAnimation()}`;
