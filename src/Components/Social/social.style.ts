import styled from 'styled-components';

const StyledSocial = styled.section`
  min-width: 25rem;

  dl {
    dt {
      display: flex;
      font-weight: bold;
      ::after {
        content: '';
        height: .75em;
        align-self: flex-end;
        flex: 1;
        margin-left: 0.5rem;
        border-top: 2px solid var(--color-bg-primary);
      }
    }
    dd {
      margin-top: 10px;
      ::before {
        content: " ";
        position: absolute;
        margin-left: -1.5rem;
      }
      :hover {
        ::before {
          content: ">";
        }
      }
    }
  }
`;

export const MiscLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export default StyledSocial;
