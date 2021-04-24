import styled from 'styled-components';

const StyledPageWrapper = styled.header`
  color: var(--color-primary);
  background-color: var(--color-bg-primary);

  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  min-height: 100vh;
`;

export const DarkModeID = 'darkmode';
export const GlobalToggler = styled.label.attrs({ htmlFor: DarkModeID })``;

const themer = [
  {
    light: {
      selector: '',
      mixin: `
        --color-primary: #2e2e2e;
        --color-secondary: #414141;

        --color-bg-primary:   #efefef;
        --color-bg-secondary: #dddddd;
      `,
    },
    dark: {
      selector: '',
      mixin: `
        --color-primary:    #c3c3c3;
        --color-secondary:  #d6d6d6;

        --color-bg-primary: #1a1a1a;
        --color-bg-secondary: #131313;
      `
    }
  },
  {
    light: {
      selector: `${GlobalToggler}::before`,
      mixin: `transform: translate3d(0, 0, 0);`,
    },
    dark: {
      selector: `${GlobalToggler}::before`,
      mixin: `transform: translate3d(100%, 0, 0);`
    }
  },
];

export const TogglerRoot = styled.input.attrs({ type: 'checkbox', id: DarkModeID })`
  display: none;

  ${themer.map((theme) => `
    & + ${StyledPageWrapper} ${theme.light.selector} {
      ${theme.light.mixin}
    }

    :checked + ${StyledPageWrapper} ${theme.dark.selector} {
      ${theme.dark.mixin}
    }
  `)}
`;

export default StyledPageWrapper;
