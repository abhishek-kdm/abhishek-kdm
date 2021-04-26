import styled, { css } from 'styled-components';

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
