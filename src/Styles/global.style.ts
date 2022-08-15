import styled, { createGlobalStyle, css } from 'styled-components';

type FontFace = {
  name: string;
  publicURL: string;
  extension: string;
};

const GlobalStyle = createGlobalStyle<{ fontFaces: FontFace[] }>`
  ${({ fontFaces }) =>
    fontFaces.map(
      ({ name, publicURL, extension }) => `
        @font-face {
          font-family: "${name}";
          src: url("${publicURL}") format("${extension}");
        }
  `
    )}

  *:not(pre), *::before, *::after {
    box-sizing: border-box;
    font-family: toshibasat8x14;
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
    border-top: 1px solid var(--color-shadow);
    border-bottom: 1px solid white;
  }

  kbd {
    background-color: var(--color-special);
    border-radius: 3px;
    color: white;
    display: inline-block;
    font-size: .75em;
    font-weight: 700;
    line-height: 1;
    padding: 3px 5px;
    margin: 0 5px;
    white-space: nowrap;
  }

  dd {
    box-sizing: border-box;
  }

  /* handling gfm rendering. */
  code {
    color: var(--color-primary);
    background-color: var(--color-bg-primary);
  }

  pre > code {
    box-sizing: border-box;
    display: block;
    padding: 5px;
    border-radius: 6px;
    background-color: #eeeeee;
  }

  th, td {
    border: 1px solid var(--color-primary);
  }
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 52rem;
  @media (max-width: 576px) {
    width: 90%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 730px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const RetroCSS = css`
  padding: 2px;
  box-shadow: 2px 2px 0 var(--color-secondary), 2px 2px 0 white inset;
  outline: none;
  border: none;
  user-select: none;
`;

export const ButtonCSS = css`
  ${RetroCSS}
  cursor: pointer;
  :active {
    background-color: var(--color-bg-secondary);
    box-shadow: 2px 2px 0 var(--color-secondary) inset, 2px 2px 0 white;
  }
`;

export const Button = styled.button`
  ${ButtonCSS}
`;

export const Anchor = styled.a.attrs((props) =>
  props.target === '_blank' ? { rel: 'noopener noreferrer', ...props } : props
)`
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

  li::after {
    content: ' ';
  }

  li::before {
    content: '[ ]';
    font-family: monospace;
    color: var(--color-secondary);
    padding-right: 1rem;
    padding-left: 0.5rem;
    text-shadow: none;
  }

  li:hover::before {
    content: '[*]';
  }
`;

export default GlobalStyle;
