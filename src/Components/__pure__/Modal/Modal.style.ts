import styled from 'styled-components';
import { InfoboxAnimate } from '../Infobox/Infobox.style';
import { ButtonCSS } from '../../../Styles/global.style';

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: rgba(50, 50, 50, 0.5);
  backdrop-filter: blur(5px);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalContent = styled.section`
  color: var(--color-primary);
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-primary);
  padding: 2rem 1rem 1rem;
  position: absolute;
  margin-top: 15vh;

  display: flex;
  flex-direction: column;
  ${InfoboxAnimate}
`;

export const ModalCloseButton = styled.button`
  ${ButtonCSS}
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  align-self: flex-end;
  color: var(--color-primary);
  background-color: transparent;
`;

export default StyledModal;
