import styled from 'styled-components';

const StyledRepositories = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
  grid-template-rows: repeat(auto-fill, minmax(2.75rem, auto));
  grid-gap: 10px;
  min-width: 375px;
`;

export const StyledRepositoryFile = styled.section`
  min-width: 350px;
  header {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default StyledRepositories;
