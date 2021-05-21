import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--color-primary);
  background-color: var(--color-bg-primary);

  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  min-height: 100vh;

  --color-special: #8e44ad;
`;

const DarkModeID = 'darkmode';
export const GlobalToggler = styled.label.attrs({ htmlFor: DarkModeID })``;
export const TogglerRoot = styled.input.attrs({ type: 'checkbox', id: DarkModeID })`
  display: none;

  & + ${Wrapper} {
    --color-primary: #2e2e2e;
    --color-secondary: #414141;

    --color-bg-primary:   #efefef;
    --color-bg-secondary: #dddddd;

    --color-shadow: #353535;
  }

  :checked + ${Wrapper} {
    --color-primary:    #c3c3c3;
    --color-secondary:  #d6d6d6;

    --color-bg-primary: #1a1a1a;
    --color-bg-secondary: #131313;

    --color-shadow: #dddddd;
  }

  & + ${Wrapper} ${GlobalToggler}::after {
    content: 'Dark';
  }

  :checked + ${Wrapper} ${GlobalToggler}::after {
    content: 'Light';
  }
`;

export default Wrapper;
