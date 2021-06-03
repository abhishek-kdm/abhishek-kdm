import styled from 'styled-components';

const StyledFile = styled.span`
  display: grid;
  grid-template-rows: 2.75rem auto;
  grid-template-columns: 6rem;
  width: 7rem;

  padding: 10px 0.5rem;
  margin: 10px 0;
  border-radius: 4px;
  cursor: pointer;
  color: var(--color-secondary);

  :focus {
    color: white;
    background-color: blue;
  }

  svg {
    width: 100% !important;
    height: 90% !important;
  }
`;

export const FileName = styled.span`
  display: flex;
  justify-content: center;
  user-select: none;
  word-break: break-all;
`;

export default StyledFile;
