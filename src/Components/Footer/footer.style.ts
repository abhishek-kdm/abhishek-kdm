import styled from 'styled-components';
import { GlobalToggler } from '../../Wrapper';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 1rem;
  background-color: var(--color-bg-secondary);
  border-top: 3px solid var(--color-secondary);
`;

export const ThemeToggler = styled(GlobalToggler).attrs({
  title: 'Toggle Dark mode',
})`
  display: flex;
  height: 24px;
  width: 46px;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  background-color: var(--color-primary);
  box-shadow: 1px 1px 6px black, 1px 1px 6px inset black;

  ::before {
    content: '';
    height: 12px;
    width: 17px;
    transition: 0.2s ease-in-out;
    transition-property: transform;

    border-radius: 2px;
    background-color: var(--color-bg-primary);
  }
`;

export const ContactButton = styled.em`
  text-decoration: underline;
  cursor: pointer;
`;

export default StyledFooter;
