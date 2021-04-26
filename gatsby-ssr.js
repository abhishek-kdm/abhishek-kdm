import { createElement } from 'react';
import Wrapper, { TogglerRoot } from './src/Wrapper';
import { siteMetadata } from './package.json';

const el = createElement;
const { title, description, author } = siteMetadata;

export const wrapPageElement = ({ element, props }) => [
  el(TogglerRoot, null),
  el(Wrapper, props, element),
];

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents([
    el('title', null, `${title} | ${description}`),
    el('meta', { name: 'description', content: description }),
    el('meta', { property: 'og:title', content: title }),
    el('meta', { property: 'og:description', content: description }),
    el('meta', { property: 'og:type', content: 'website' }),
    el('meta', { name: 'twitter:card', content: 'summary' }),
    el('meta', { name: 'twitter:creator', content: author }),
    el('meta', { name: 'twitter:title', content: title }),
    el('meta', { name: 'twitter:description', content: description }),
    el('link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }),
    el('link', { href: 'https://fonts.googleapis.com/css2?family=Quantico&display=swap', rel: 'stylesheet' }),
    ...getHeadComponents()
  ]);
}
