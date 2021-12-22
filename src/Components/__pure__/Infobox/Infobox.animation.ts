import { keyframes } from 'styled-components';

export const RetroAnimation = keyframes`
  0%    { transform: scaleX(0.2) scaleY(0.01); filter: invert(1); }
  70%   { transform: scaleX(1) scaleY(0.01); filter: invert(1); }
  71%   { filter: none; }
  100%  { transform: scaleY(1); }
`;
