import { keyframes } from 'styled-components';

export const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Blink = keyframes`
  0% { opacity: 0; }
  49% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
  99% { opacity: 1; }
`;

