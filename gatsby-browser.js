import './src/Styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { createElement } from 'react';
import Wrapper, { TogglerRoot } from './src/Wrapper';

const el = createElement;

export const wrapPageElement = ({ element, props }) => {
  const defaultChecked = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return [
    el(TogglerRoot, { defaultChecked }),
    el(Wrapper, props, element),
  ];
}
