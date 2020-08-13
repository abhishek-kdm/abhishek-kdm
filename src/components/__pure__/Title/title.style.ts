import styled from 'styled-components';

const StyledTitle = styled.div`
  box-sizing: border-box;
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  font-weight: 700;
  display: flex;

  ::before,
  ::after {
    content: '';
    height: 0;
    align-self: center;
    border: 1px solid var(--color-bg-primary);
  }

  ::before {
    width: 1.75rem;
    margin-right: 5px;
  }
  ::after {
    flex: 1;
    margin-left: 5px;
  }
`;


export default StyledTitle;

