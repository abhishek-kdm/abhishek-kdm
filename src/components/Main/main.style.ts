import styled from 'styled-components';
import { toDataImageScheme, getLogo, range } from '../../utils';

import InfoBox from '../__pure__/InfoBox/infoBox.component';

// @ts-ignore
const jsSUCKS = (t) => toDataImageScheme(getLogo(t)({ asImage: true }));

export const SVGDash = styled.svg`
  width: 90%;
  position: absolute;
  bottom: 3px;

  path {
    stroke: var(--color-primary);
    fill: none;
    stroke-dasharray: 0, 21;
    stroke-dashoffset: -20;
    transition: stroke-dasharray .5s, stroke-dashoffset .5s;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
  box-sizing: border-box;

  nav li.active ${SVGDash} path {
    stroke-dasharray: 40, 0;
    stroke-dashoffset: 0;
  }

  nav {
    display: grid;
    grid-template-rows: auto minmax(50px, 100%);
  }
`;

export const MainWrapper = styled.div`
  background-color: var(--color-bg-primary);
  width: 100%;

  box-sizing: border-box;
  box-shadow: var(--neumorphic-shadow-small);
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: minmax(60vh, 400px);

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 50vh auto;
  }
`;

export const ScreenWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  -webkit-clip-path: url(#screen-curve);
  clip-path:         url(#screen-curve);

  display: grid;
  grid-template-rows: minmax(40vh, 1fr);

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

  #statusbar {
    padding-left: 3%!important;
    padding-right: 3%!important;
  }
`;

export const ScreenDisplay = styled(InfoBox)`
  flex: 1;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background-image: url("${({ theme }) => jsSUCKS(theme.name)}");

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

export const Radiator = styled.div`
  padding: .5rem;
  padding-top: 0;
  border-radius: 6px;

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

