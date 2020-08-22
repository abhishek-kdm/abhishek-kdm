import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '../styles/global.style';

const GlobalCommStyle = createGlobalStyle`
  :root {
    --color-primary:      #a0a0f7;
    --color-secondary:    #202020;
    --color-bg-primary:   #4638a6;
    --color-bg-secondary: #c5c5c5;

    --link-hl-color:      #00b894;

    --title-fg:           var(--color-secondary);
    --title-bg:           var(--color-bg-secondary);
    --title-pseudo:       var(--color-bg-secondary);

    --aspect-ratio
  }

  * {
    font-family: DOS_VGA_437;
    font-weight: 700;
  }

  hr {
    height: 4px;
    border-top: 1px dashed var(--color-primary);
    border-bottom: 1px dashed var(--color-primary);
  }

  a {
    text-decoration: none;
    padding: 2.5px;
    color: var(--color-primary);

    :hover {
      background-color: var(--link-hl-color);
      color: white;
    }
  }
`;

export const CommWrapper = styled.div`
  flex: 1;
  padding: 10px;
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
`;

export const CommDetails = styled.details`
  box-sizing: content-box;
  padding: 2.5px 5px 5px;
  background-color: var(--color-bg-secondary);
  box-shadow: 10px 10px 0 0 var(--color-secondary);
  margin-bottom: 2rem;

  &, * { color: var(--color-secondary); }

  & > section {
    border: 2px solid var(--color-secondary);
    border-top: none;
    padding: 10px 10px 0;
  }

  &[open] {
    summary {
      ::before {
        border-left: 2px solid var(--color-secondary);
      }
      ::after {
        border-right: 2px solid var(--color-secondary);
      }
    }
  }

`;

export const CommSummary = styled.summary`
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  text-align: left;
  margin: 10px 0 0 0;
  line-height: 2rem;

  strong { font-size: 1.5rem; }

  display: flex;
  ::before,
  ::after {
    content: '';
    height: .8rem;
    align-self: flex-end;
    border-top: 2px solid var(--color-secondary);
  }

  ::before {
    width: 1.75rem;
    margin-right: 5px;
  }
  ::after {
    flex: 1;
    margin-left: 5px;
  }
`;

export const CommHeader = styled(Container)`
  text-align: right;
`;
export const CommMain = styled(Container)`
  & *:not(svg):not(path) {
    line-height: 1.2rem;
  }
`;

export default GlobalCommStyle;

