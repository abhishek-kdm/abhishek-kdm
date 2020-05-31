import { renderToStaticMarkup } from 'react-dom/server';
import BackgroundImage from '../components/__pure__/SVG/Background';


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

export const range = (n: number, fn: (v: null, i: number, a: any[]) => Word) => Array(n)
  .fill(null)
  .map(fn)

export const getBackground = (color: string) => {
  // @ts-ignore
  return toDataImageScheme(BackgroundImage({ color }));
}

export const toDataImageScheme = (component: React.ReactElement) => {
  return `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(component))}`;
}
