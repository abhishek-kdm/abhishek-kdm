import styled from 'styled-components';
import { GlobalToggler } from '../../Wrapper';
import { ShadowButtonCSS } from '../../Styles/global.style';
import { ContactFormToggler } from '../ContactForm/contactForm.style';

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  position: relative;
  overflow: clip;
  padding: 1rem;
`;

export const Menu = styled.div`
  border: 2px solid var(--color-secondary);
  border-bottom: none;
  background-color: var(--color-bg-primary);
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  transition-duration: 0.25s;
  transition-function: ease-in-out;
  transition-property: transform;
  transform: translate3d(0, 100%, 0);
  z-index: 9999;

  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;

  & > * { display: flex; }
`;

export const ContactButton = styled(ContactFormToggler)`
  ${ShadowButtonCSS}
`;

export const MenuToggler = styled.input.attrs({ type: 'checkbox', id: 'menu-toggler' })`
  display: none;

  :checked + ${Menu} {
    transform: translate3d(0, 0, 0);
  }
`;

export const ThemeToggler = styled(GlobalToggler)`
  ${ShadowButtonCSS}

  ::after {
    font-weight: bold;
  }
`;

export default Main;
