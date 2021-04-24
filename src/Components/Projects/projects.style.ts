import styled from 'styled-components';

const StyledProjects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
  grid-template-rows: repeat(auto-fill, minmax(2.75rem, auto));
  grid-gap: 10px;
  min-width: 375px;
`;

export default StyledProjects;
