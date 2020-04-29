import { renderToStaticMarkup } from 'react-dom/server';
import { THEME, THEME_BACKGROUND_COLOR } from '../configs';

import BackgroundImage from '../components/__pure__/SVG/Background';

import ZergLogo from '../components/__pure__/SVG/Logo/zerg.logo';
import TerranLogo from '../components/__pure__/SVG/Logo/terran.logo';
import ProtossLogo from '../components/__pure__/SVG/Logo/protoss.logo';


type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<any>;

export const fetchJson: Fetch = async (...args) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export const isTouchDevice = () => 'ontouchstart' in window;

export const doubleDigit = (x: Word) => `0${x}`.trim().slice(-2);

export const randInt = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));

export const getLogo = (theme: Theme) => {
  switch (theme) {
    case THEME.zerg: return ZergLogo;
    case THEME.terran: return TerranLogo;
    default: return ProtossLogo;
  }
}

export const getBackground = (theme: Theme) => {
  // @ts-ignore
  return toDataImageScheme(BackgroundImage({ color: THEME_BACKGROUND_COLOR[theme] }));
}

export const toDataImageScheme = (component: React.ReactElement) => {
  return `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(component))}`;
}
