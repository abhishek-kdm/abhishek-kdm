const { createElement, Fragment } = require('react');
const Wrapper = require('./src/Wrapper').default;

const configs = {
  name: 'LycuiD',
  description: 'Living large...in the matrix.',
  author: '@lycuid',
};

exports.wrapPageElement = ({ element, props }) =>
  createElement(Wrapper, props, element);

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headers = [
    createElement('title', null, `${configs.name} | ${configs.description}`),
    createElement('meta', { charSet: 'utf-8' }),
    createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
    createElement('meta', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    }),
    createElement('meta', {
      name: 'description',
      content: configs.description,
    }),
    createElement('meta', { property: 'og:title', content: configs.name }),
    createElement('meta', {
      property: 'og:description',
      content: configs.description,
    }),
    createElement('meta', { property: 'og:type', content: 'website' }),
    createElement('meta', { name: 'twitter:card', content: 'summary' }),
    createElement('meta', { name: 'twitter:creator', content: configs.author }),
    createElement('meta', { name: 'twitter:title', content: configs.name }),
    createElement('meta', {
      name: 'twitter:description',
      content: configs.description,
    }),
  ];

  replaceHeadComponents([
    ...getHeadComponents(),
    ...headers.map((tag, key) => createElement(Fragment, { key }, tag)),
  ]);
};
