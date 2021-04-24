import styled from 'styled-components';
import { GlobalToggler } from '../PageWrapper/pageWrapper.style';

const StyledFooter = styled.footer`
  display: flex;
  padding: 10px;
  background-color: var(--color-bg-secondary);
  border-top: 3px solid var(--color-secondary);
`;

export const ThemeToggler = styled(GlobalToggler)`
  display: flex;
  height: 20px;
  width:  40px;
  cursor: pointer;
  border-radius: 50px;
  background-color: #786fa6;

  ::before {
    content: '';
    transition: .2s ease-in-out;
    transition-property: transform;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-color: #c6c6c6;
  }
`;

export default StyledFooter;
