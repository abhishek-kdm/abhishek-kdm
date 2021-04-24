import React from 'react';
import GlobalStyle from './src/Styles/global.style';

export const wrapPageElement = ({ element }) => {
  return (<>
    <GlobalStyle />
    {element}
  </>);
}
