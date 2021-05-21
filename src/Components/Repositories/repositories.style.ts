import styled from 'styled-components';

const StyledRepositories = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
  grid-gap: 10px;

  dl {
    dt {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export const StyledRepositoryFile = styled.section`
  header {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default StyledRepositories;
