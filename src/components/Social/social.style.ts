import styled from 'styled-components';

const StyledSocial = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}
`;

export const LinkContainer = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const Link = styled.li`
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;

  ::before {
    content: '[ ]';
    font-weight: 100;
    color: var(--color-secondary);
    padding-right: 1rem;
    padding-left: .5rem;
    text-shadow: none;
  }

  :hover::before {
    content: '[*]';
  }
`;

export default StyledSocial;

