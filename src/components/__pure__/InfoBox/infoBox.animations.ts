import { keyframes } from 'styled-components';

export const vintageDisplay = keyframes`
  0% { transform: rotatey(90deg) scaleY(.01); }
  75% { transform: rotatey(0deg) scaleY(.01); }
  100% { transform: scaleY(1); }
`;
