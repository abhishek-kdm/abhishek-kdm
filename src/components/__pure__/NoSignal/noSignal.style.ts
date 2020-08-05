import styled from 'styled-components';
import { Glitch1, Glitch2 } from './noSignal.animations';

export const NoSignalLabel = styled.label`
  background-color: #000000;
  color: #aa0000;
  padding: 10px;
  font-family: "Press Start 2P";

  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
`;

const StyledNoSignal = styled.div`
  display: grid;
  grid-template-rows: 65% 7.5% 27.5%;

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;

  span { position: relative; }

  span,
  span::before,
  span::after {
    box-shadow:
      inset 5px 0 25px 25px rgba(0, 0, 0, .2),
      inset -5px 0 25px 25px rgba(0, 0, 0, .2);
  }

  span:nth-child(1),
  span:nth-child(1)::before,
  span:nth-child(1)::after {
    background: linear-gradient(
      to right,
      #c3bdad 0 14%,
      #e9e625 14% 28%,
      #66e5d0 28% 42%,
      #70e82f 42% 56%,
      #f540e5 56% 70%,
      #f44025 70% 84%,
      #311fd7 84% 100%
    );
  }
  span:nth-child(2),
  span:nth-child(2)::before,
  span:nth-child(2)::after {
    background: linear-gradient(
      to right,
      #291ed2 0 14%,
      #3a3024 14% 28%,
      #ed18c8 28% 42%,
      #473626 42% 56%,
      #73e8e0 56% 70%,
      #54482e 70% 84%,
      #aea699 84% 100%
    );
  }
  span:nth-child(3),
  span:nth-child(3)::before,
  span:nth-child(3)::after {
    background: linear-gradient(
      to right,
      #415259 0 17.5%,
      #ebe7cc 17.5% 35%,
      #5c1a72 35% 52.5%,
      #50442c 52.5% 70%,
      #3d331a 70% 76%,
      #524733 76% 82%,
      #484035 82% 88%,
      #1D1C17 88% 94%,
      #11100b 94% 100%
    );
  }
  span::before,
  span::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: inherit;
    clip-path: polygon(0 33%, 100% 33%, 100% 0, 0 0);
  }

  span::before {
    left: 3px;
    animation: ${Glitch1} 1s linear alternate-reverse;
  }
  span::after {
    left: -3px;
    animation: ${Glitch2} 1s linear alternate-reverse;
`;

export default StyledNoSignal;

