import styled from 'styled-components';

const StyledSocial = styled.section`
  dl {
    dt {
      display: flex;
      font-weight: bold;
      ::after {
        content: '';
        margin-bottom: 0.45em;
        align-self: flex-end;
        flex: 1;
        margin-left: 0.5rem;
        border-top: 1px solid var(--color-shadow);
        border-bottom: 1px solid white;
      }
    }
    dd {
      margin-top: 10px;
      ::before {
        content: ' ';
        font-family: monospace;
        font-size: 1.1rem;
        position: absolute;
        margin-left: -1.25rem;
      }
      :hover {
        ::before {
          content: '>';
        }
      }

      a + sub {
        font-family: monospace;
        margin-left: 1em;
      }
    }
  }
`;

export const MiscLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export default StyledSocial;
