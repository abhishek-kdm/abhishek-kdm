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

export const Anchor = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
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

export const ShadowButtonCSS = css`
  display: flex;
  justify-content: center;
  box-shadow: .25rem .25rem 0 var(--color-shadow);
  padding: 5px 10px;
  margin: 0 .5rem .75rem 0;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  outline: none;
  font-size: .9rem;
  font-weight: bold;

  :hover {
    transform: translate3d(.25rem, .25rem, 0);
    box-shadow: none;
  }
`;

