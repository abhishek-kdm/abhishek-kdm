import styled from 'styled-components';

const RepositoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
  grid-gap: 10px;
`;

export const RepositoryFieldset = styled.fieldset`
  border: 1px solid var(--color-bg-primary);
`;

export const StyledRepositoryFile = styled.section`
  header {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default RepositoryContainer;
