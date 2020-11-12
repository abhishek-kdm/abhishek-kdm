import styled from 'styled-components';
import { ScanLines } from './main.animations';
import { toDataImageScheme, range } from '../../utils';

import StyledStatusbar from '../__pure__/Statusbar/statusbar.style';
import InfoBox from '../__pure__/InfoBox/infoBox.component';
import { Container } from '../../styles/global.style';

// @ts-ignore
const jsSUCKS = (fn) => toDataImageScheme(fn({ asImage: true }));

const StyledMain = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
  box-sizing: border-box;
`;

export const MainWrapper = styled.div`
  background-color: var(--color-bg-screen);
  width: 100%;

  box-sizing: border-box;
  box-shadow: var(--retro-shadow);
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr var(--side-panel-width);
  grid-template-rows: auto;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
  }
`;

export const ScreenNavigation = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
`;

export const FullscreenButton = styled.span<{ color?: string }>`
  --size: 15px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: ${({ color }) => color || 'red'};
  border: 4px solid var(--retro-border-color);
  position: absolute;
  top: -12px;
  z-index: 9999;
  outline: none;
  cursor: pointer;
`;

export const ScreenWrapper = styled.div`
  box-sizing: border-box;
  -webkit-clip-path: url(#screen-curve);
  clip-path:         url(#screen-curve);

  border: 2px solid black;

  display: grid;
  grid-template-rows: var(--aspect-ratio-height);

  background-image:
    linear-gradient(to bottom, var(--screen-shadow), var(--color-primary-opacity), var(--screen-shadow));

  bakground-color: black;
`;

export const Screen = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  box-sizing: border-box;

  background-color: var(--color-primary-opacity);
  background-image:
    linear-gradient(to bottom, var(--screen-shadow), var(--color-primary-opacity), var(--screen-shadow)),
    linear-gradient(to right, var(--screen-shadow), var(--color-primary-opacity), var(--screen-shadow));
  text-shadow: 1px 1px 3px var(--color-primary);
  box-shadow:
    inset 5px 5px 25px 25px rgba(0, 0, 0, .2),
    inset -5px -5px 25px 25px rgba(0, 0, 0, .2);

  margin: 1rem;
  padding: 1rem 1rem 0;

  -webkit-clip-path: url(#screen-curve);
  clip-path:         url(#screen-curve);

  * {
    font-family: "RobotoMono";
    font-size: .8rem;
  }

  * svg {
    font-size: 1rem;
  }

  ${StyledStatusbar} {
    padding-left: 3%!important;
    padding-right: 3%!important;
  }
`;

export const ScreenDisplay = styled(InfoBox)`
  flex: 1;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background-image: url("${({ theme }) => jsSUCKS(theme.logo)}");

  background-position: right;
  background-repeat: no-repeat;
  background-clip: content-box;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border-left: .3rem solid var(--color-primary);
    background-color: transparent;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    border-left: .3rem solid var(--color-secondary);
    background-color: transparent;
  }

  @media (max-width: 768px) { background-position: center; }
`;

export const SidePanel = styled.div`
  box-shadow: var(--retro-shadow);
  display: grid;
  grid-template-rows: auto minmax(50px, 100%) 0px;
  grid-template-columns: none;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 0px;

  @media (max-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;

    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
  }
`;

export const VolumeButtonContainer = styled.div`
  --button-size: 80px;
  margin: 15px;
  padding: 15px;
  box-shadow: var(--retro-shadow);
  border-radius: 10px;

  display: grid;
  justify-content: center;
  grid-template-rows: repeat(2, var(--button-size));
  grid-template-columns: var(--button-size);
  grid-gap: 25px;

  @media (max-width: 768px) {
    --button-size: 40px;
    margin: 5px;
    padding: 5px;
    grid-template-columns: var(--button-size) 0;
    grid-template-rows: var(--button-size);
    grid-gap: 0;
    box-shadow: none;
  }
`;

export const VolumeButton = styled.div<{ angle?: Maybe<number> }>`
  box-shadow: var(--retro-shadow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    width: 10%;
    height: 95%;
    border-radius: 50px;
    box-shadow: var(--retro-shadow);

    ${({ angle }) => angle ? `
      transform: rotate(${angle}deg);
    ` : ''}
  }
`;

export const Speaker = styled.div`
  padding: .5rem;
  box-shadow: var(--retro-shadow);

  background-clip: content-box;
  background-image: ${({ theme }) => {
    const W = 7;
    const halfW = Math.fround(W / 2);
    const lines = range(5, (_, i) => `<line x1="${halfW}" y1="${(i * 10) + halfW}" x2="${50 - halfW}" y2="${i * 10 + halfW}"/>`);
    const svg = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <g stroke="${theme.patternColor}" stroke-width="${W}" stroke-linecap="round">
          ${lines.join()}
        </g>
      </svg>
    `);
    return `url("data:image/svg+xml,${svg}");`;
  }}
`;

export const CloseButton = styled.span`
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  margin-top: .5em;
  margin-right: .5em;
`;

export const NavButtonContainer = styled.ul`
  margin: 10px 15px;
`;

export const NavButton = styled.li`
  -webkit-user-select: none;
  -moz-user-select:    none;
  user-select:         none;

  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  box-shadow: var(--retro-shadow);
  border-radius: 6px;
  background-color: var(--color-bg-screen);

  cursor: pointer;

  &.active {
    box-shadow: var(--retro-shadow-active);
  }

  :active {
    box-shadow: var(--retro-shadow-active);
    transform: scale(.95);
  }
`;

export const FullscreenModal = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  padding: 0;

  *:not(svg) {
    font-family: "Roboto Mono";
    font-size: .8rem;
  }
`;

export const CRTScanLines = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  left: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, .05)
  );
  animation: ${ScanLines} 3s linear infinite;
`;

export default StyledMain;

