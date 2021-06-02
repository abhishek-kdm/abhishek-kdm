import styled from 'styled-components';
import { InfoboxAnimate } from '../Infobox/infobox.style';

const StyledModal = styled.dialog`
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-primary);
  padding: 2rem 1rem 1rem;
  margin-top: 15vh;

  &[open] {
    display: flex;
    flex-direction: column;
    ${InfoboxAnimate}
  }

  ::backdrop {
    background-color: rgba(50, 50, 50, 0.5);
    backdrop-filter: blur(5px);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const ModalContent = styled.form``;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  border: none;
  outline: none;
  border-radius: 3px;
  align-self: flex-end;
  cursor: pointer;
  color: var(--color-secondary);
  background-color: var(--color-bg-secondary);
`;

export default StyledModal;
