import styled from 'styled-components';

const RepositoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
  grid-gap: 10px;
`;

export const RepositoryFieldset = styled.fieldset`
  margin-bottom: 0.75em;
  box-shadow: 1px 1px 0 var(--color-shadow), 1px 1px 0 white inset;
  border: none;
  legend {
    background-color: var(--color-bg-primary);
    font-size: 1.25em;
    padding: 0 5px;
  }
`;

export const StyledRepositoryFile = styled.section`
  header {
    display: flex;
    justify-content: space-between;
  }
`;

export default RepositoryContainer;
