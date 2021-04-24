import styled, { createGlobalStyle, css } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  *:not(pre), *::before, *::after {
    box-sizing: border-box;
    font-family: 'Quantico', monospace;
  }

  body, html {
    padding: 0;
    margin: 0;
  }

  pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  hr {
    height: 0;
    border: none;
    border-top: 1px solid var(--color-bg-primary);
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    border-left: .3rem solid var(--color-primary);
    background-color: transparent;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    border-left: .3rem solid grey;
    background-color: transparent;
  }
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 52rem;
  @media (max-width: 576px) { width: 90%; }
  @media (min-width: 576px) { width: 540px; }
  @media (min-width: 768px) { width: 730px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 1200px) { width: 1170px; }
`;

export const Anchor = styled.a.attrs(() => ({ target: '_blank', rel: 'noopener noreferrer' }))`
  color: var(--color-secondary);
  transition: none;
  border-bottom: 1px solid var(--color-secondary);
  text-decoration: none;

  :hover {
    border-bottom: 1px solid transparent;
  }
`;

export const RetroList = styled.ul`
  padding: 0;
  list-style-type: none;

  li {
    display: grid;
    grid-template-columns: auto auto 1fr;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li::after { content: ' '; }

  li::before {
    content: '[ ]';
    font-family: monospace;
    color: var(--color-secondary);
    padding-right: 1rem;
    padding-left: .5rem;
    text-shadow: none;
  }

  li:hover::before {
    content: '[*]';
  }
`;

/* reference: https://nostalgic-css.github.io/NES.css/ */
export const RetroSelectionCSS = css`
  background-color: #00000017;
  box-shadow: inset 5px 5px rgba(0, 0, 0, .2);
`;

export const Retro = css`
  position: relative;
  border-color: var(--color-primary);
  margin: 6px;
  border-style: solid;
  border-width: 4px;
  background-color: var(--color-bg-secondary);

  border-image-slice: 3;
  border-image-width: 3;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(150, 150, 150)" /></svg>');
  border-image-outset: 2;
`;

export const RetroButton = styled.button`
  ${Retro}
  ::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    box-shadow: inset -5px -5px rgba(0, 0, 0, .12);
  }

  :active::after {
    ${RetroSelectionCSS}
  }
`;

export default StyledGlobal;
