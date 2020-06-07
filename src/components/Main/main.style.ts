import styled from 'styled-components';
import { toDataImageScheme, range } from '../../utils';

import StyledStatusbar from '../__pure__/Statusbar/statusbar.style';
import InfoBox from '../__pure__/InfoBox/infoBox.component';

// @ts-ignore
const jsSUCKS = (fn) => toDataImageScheme(fn({ asImage: true }));

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
  box-sizing: border-box;
`;

export const MainWrapper = styled.div`
  background-color: var(--color-bg-primary);
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
`;

export const ScreenWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  -webkit-clip-path: url(#screen-curve);
  clip-path:         url(#screen-curve);
  box-shadow: var(--neumorphic-shadow-small);

  display: grid;
  grid-template-rows: var(--aspect-ratio-height);

  background-image:
    linear-gradient(to bottom, var(--screen-shadow), var(--color-primary-opacity), var(--screen-shadow));
`;

export const Screen = styled.div`
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

  *:not(svg):not(path) {
    font-family: 'IBM Plex Mono';
    font-size: .8rem;
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

export const VolumeButton = styled.div`
  box-shadow: var(--retro-shadow);
  border-radius: 50%;
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

export default StyledMain;

