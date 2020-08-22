import styled from 'styled-components';

const StyledSocial = styled.section`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SocialLinks = styled.ul`
  padding: 0;
  list-style-type: none;
  flex: 1;

  li {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li::before {
    content: '[ ]';
    font-weight: 100;
    color: var(--color-secondary);
    padding-right: 1rem;
    padding-left: .5rem;
    text-shadow: none;
  }

  li:hover::before {
    content: '[*]';
  }
`;

export const IconLinkContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`;

export const IconLink = styled.li`
  text-decoration: none;
  margin: 0 2.5px;

  a { border: none; }
`;

export default StyledSocial;

