import styled from 'styled-components';
import { glitchAnimationBefore, glitchAnimationAfter } from './glitch.animations';


const StyledGlitch = styled.span<{ text: string }>`
  position: relative;
  font-weight: 700;

  &::before,
  &::after {
    content: '${({ text }) => text}';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: inherit;
    clip-path: polygon(0 33%, 100% 33%, 100% 0, 0 0);
  }

  &::before {
    left: 1px;
    text-shadow: -1px -1px red;
    animation: ${glitchAnimationBefore} 2s infinite linear;
  }

  &::after {
    left: -1px;
    text-shadow: 1px 1px blue;
    animation: ${glitchAnimationAfter} 2s infinite linear;
  }
`;

export default StyledGlitch;
