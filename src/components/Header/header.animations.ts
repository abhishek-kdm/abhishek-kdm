import { keyframes } from 'styled-components';

export const prepareLaunch = keyframes`
  10% { transform: translateY(-4px); }
  25% { transform: translateY(-2.5px); }
  40% { transform: translateY(-4px); }
  55% { transform: translateY(2.5px); }
  70% { transform: translateY(0px); }
  85% { transform: translateY(-4px); }
  95% { transform: translateY(-1.75px); }
  100% { transform: translateY(0); }
`;

export const launchReady = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;
