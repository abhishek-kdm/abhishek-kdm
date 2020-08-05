import styled from 'styled-components';

const StyledProjects = styled.section`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  flex-direction: column;
`;


export const ProjectsList = styled.ul`
  padding: 0;
  list-style-type: none;

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


export default StyledProjects;

