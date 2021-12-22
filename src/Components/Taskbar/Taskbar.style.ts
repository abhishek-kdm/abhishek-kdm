import styled from 'styled-components';
import { ButtonCSS } from '../../Styles/global.style';

const StyledTaskbar = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 2px;
  height: 2rem;
  background-color: var(--color-bg-primary);
  border-top: 2px solid var(--color-shadow);
`;

export const MinimizeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0px, 10rem));
  grid-gap: 2px;
`;

export const MinimizedWindow = styled.span`
  ${ButtonCSS}
  padding: 2px 10px;
  display: grid;
  grid-template-columns: 1.75rem auto;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Divider = styled.hr`
  width: 2px;
  height: 100%;
  margin: 0 7px;
  box-shadow: 1px 1px 0 var(--color-shadow), 1px 1px 0 white inset;
`;

export const ContactButton = styled.small`
  ${ButtonCSS}
  padding: 2px 10px;
  display: flex;
  place-items: center;
`;

export default StyledTaskbar;
