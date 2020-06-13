import styled from 'styled-components';

const StyledTitle = styled.div`
  box-sizing: border-box;
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  font-weight: 700;

  display: flex;
  text-transform: uppercase;

  &::before {
    content: '::';
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
  }
`;


export default StyledTitle;

