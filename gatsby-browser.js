const el = require('react').createElement;
const Wrapper = require('./src/Wrapper').default;

export const wrapPageElement = ({ element, props }) =>
  el(Wrapper, props, element);
