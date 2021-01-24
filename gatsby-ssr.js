import React from 'react';
import GlobalStyle from './src/styles/global.style';
import Layout from './src/Layout/layout.component';

export const wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
}

export const wrapPageElement = ({ element }) => {
  return (<>
    <GlobalStyle />
    {element}
  </>);
}

export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  setBodyAttributes({ className: 'terran' });
}

