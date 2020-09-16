import { createGlobalStyle } from 'styled-components';

const GlobalIndexStyle = createGlobalStyle`
  :root {
    --aspect-ratio-width: var(--container-max-width);
    --side-panel-width: 175px;
    --aspect-ratio-height: calc(((var(--aspect-ratio-width) - var(--side-panel-width)) / 16) * 9);
  }

  * {
    font-family: "Montserrat", "Courier New", Courier, monospace;
    color: var(--color-primary);
  }

  body {
    background-color: var(--color-bg-primary);
  }

  a {
    color: var(--link-color)!important;
    transition: none;
    border-bottom: 1px solid var(--link-color);
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1px solid transparent;
  }

  hr {
    width: 100%;
    height: 4px;
    margin: .6rem 0;

    border: none;
    border-top: 1px dashed var(--color-primary);
    border-bottom: 1px dashed var(--color-primary);
  }

  /* scrollbar */
  ::-webkit-scrollbar { width: .3rem; }

  /* scrollbar container */
  ::-webkit-scrollbar-track { display: none; }

  /* scroller */
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: var(--color-primary);
  }

  ::-webkit-scrollbar-thumb:hover { background: var(--color-secondary); }

  .disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export default GlobalIndexStyle;

