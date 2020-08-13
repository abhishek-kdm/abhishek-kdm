import { keyframes } from 'styled-components';

export const ScanLines = keyframes`
  0% {
    transform: translateY(0);
  };
  70% {
    transform: translateY(375%);
    opacity: 1;
  };
  100% {
    transform: translateY(375%);
    opacity: 0;
  };
`;

