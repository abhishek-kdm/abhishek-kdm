import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--color-primary);
  background-color: var(--color-bg-primary);

  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  min-height: 100vh;
`;

const DarkModeID = Math.random().toString(36).substring(2, 9);
export const GlobalToggler = styled.label.attrs({ htmlFor: DarkModeID })``;
export const TogglerRoot = styled.input.attrs({ type: 'checkbox', id: DarkModeID })`
  display: none;

  & + ${Wrapper} {
    --color-primary: #2e2e2e;
    --color-secondary: #414141;

    --color-bg-primary:   #efefef;
    --color-bg-secondary: #dddddd;

    --fg-primary: #333333;
    --bg-primary: #eeeeee;
  }

  :checked + ${Wrapper} {
    --color-primary:    #c3c3c3;
    --color-secondary:  #d6d6d6;

    --color-bg-primary: #1a1a1a;
    --color-bg-secondary: #131313;

    --fg-primary: #eeeeee;
    --bg-primary: #0c0c0c;
  }

  & + ${Wrapper} ${GlobalToggler}::before {
    transform: translate3d(0, 0, 0);,
  }

  :checked + ${Wrapper} ${GlobalToggler}::before {
    transform: translate3d(100%, 0, 0);
  }
`;

export default Wrapper;
