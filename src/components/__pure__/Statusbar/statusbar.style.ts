import styled from 'styled-components';

const StyledStatusbar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  background-color: var(--color-primary-opacity);
  padding: 5px;

  & > * { font-size: .6rem!important; }
`;

export const Time = styled.div`
  color: white;
`;

export const Info = styled.div`
  color: yellow;
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export default StyledStatusbar;
