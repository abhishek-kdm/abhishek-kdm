import styled from 'styled-components';
import { toDataImageScheme, getLogo } from '../../utils';


const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;

  box-sizing: border-box;

  & nav li.active svg path {
    stroke-dasharray: 40, 0;
    stroke-dashoffset: 0;
  }

  & #screen-box {
    background-image: ${({ theme }) => `url("${
    // @ts-ignore
    toDataImageScheme(getLogo(theme.name)({ asImage: true }))
    }");`}
  }

  & #screen-box::-webkit-scrollbar {
    width: 1rem;
  }

  & #screen-box::-webkit-scrollbar-thumb {
    border-left: .3rem solid var(--color-primary);
    background-color: transparent;
    border-radius: 0;
  }

  & #screen-box::-webkit-scrollbar-thumb:hover {
    border-left: .3rem solid var(--color-secondary);
    background-color: transparent;
  }
`;

export const MainWrapper = styled.div`
  background-color: var(--color-bg-primary);
  width: 100%;

  box-sizing: border-box;
  box-shadow: var(--neumorphic-shadow-large);
  border-radius: 10px;

  display: grid;
  grid-template-columns: minmax(0, 90vh) 200px;
  grid-template-rows: 60vh;

  @media (max-width: 768px) {
    & {
      grid-template-columns: 100%;
      grid-template-rows: 60vh auto;
    }
  }
`;

export const ScreenWrapper = styled.div`
  --shadow-color: #00000040;
  --shadow-color-light: #00000030;

  position: relative;
  box-sizing: border-box;
  -webkit-clip-path: url(#screen-curve);
  clip-path:         url(#screen-curve);

  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(40vh, 1fr));

  background-image:
    linear-gradient(to bottom, var(--shadow-color), var(--color-primary-opacity), var(--shadow-color));
`;

export const Screen = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr 2.5rem;
  box-sizing: border-box;

  background-color: var(--color-primary-opacity);
  background-image:
    linear-gradient(to bottom, var(--shadow-color), var(--color-primary-opacity), var(--shadow-color)),
    linear-gradient(to right, var(--shadow-color), var(--color-primary-opacity), var(--shadow-color));
  text-shadow: 1px 1px 3px var(--color-primary);
  box-shadow:
    inset 5px 5px 25px 25px rgba(0, 0, 0, .2),
    inset -5px -5px 25px 25px rgba(0, 0, 0, .2);

  margin: 1rem;
  padding: 1rem 1rem 0;

  -webkit-clip-path: url(#screen-curve);
  clip-path:         url(#screen-curve);

  & *:not(svg):not(path) {
    font-family: 'IBM Plex Mono';
    font-size: .8rem;
  }

  & > #screen-box {
    flex: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    background-origin: content-box;
  }

  & #statusbar {
    padding-left: 2.5%;
    padding-right: 2.5%;
  }
`;

export const SVGDash = styled.svg`
  width: 90%;
  position: absolute;
  bottom: 3px;

  & path {
    stroke: var(--color-primary);
    fill: none;
    stroke-dasharray: 0, 21;
    stroke-dashoffset: -20;
    transition: stroke-dasharray .5s, stroke-dashoffset .5s;
  }
`;

export default StyledMain;
