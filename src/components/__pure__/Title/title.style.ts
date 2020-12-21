import styled from 'styled-components';

const StyledTitle = styled.div`
  box-sizing: border-box;
  background-color: var(--title-bg);
  color: var(--title-fg);
  font-weight: 700;
  display: flex;
  text-shadow: none!important;

  ::before,
  ::after {
    content: '';
    height: 0;
    align-self: center;
    border-top: 2px solid var(--title-pseudo);
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

