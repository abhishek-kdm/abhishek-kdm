import styled, { createGlobalStyle } from 'styled-components';
import { Blink } from '../styles/global.animations';

const GlobalStyle = createGlobalStyle(() => {
  return `
    * {
      --container-max-width: 52.5rem;
    }

    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    /* gatsby specific css */
    body > *, /* #__gatsby */
    #gatsby-focus-wrapper  {
      min-height: 100%;
    }

    #gatsby-focus-wrapper  {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

  `;
});

export const Container = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--container-max-width);

  @media (max-width: 576px) { width: 90%; }
  @media (min-width: 576px) { width: 540px; }
  @media (min-width: 768px) { width: 730px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 1200px) { width: 1170px; }
`;

export const BlockCursor = styled.span`
  position: relative;

  ::before {
    content: '\u2588';
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    text-shadow: none!important;
    animation: ${Blink} .75s linear infinite;
  }
`;

export const RetroList = styled.ul`
  padding: 0;
  list-style-type: none;

  li {
    display: grid;
    grid-template-columns: auto 1fr;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li::before {
    content: '[ ]';
    font-weight: 100;
    color: var(--color-secondary);
    padding-right: 1rem;
    padding-left: .5rem;
    text-shadow: none;
  }

  li:hover::before {
    content: '[*]';
  }
`;

export default GlobalStyle;

