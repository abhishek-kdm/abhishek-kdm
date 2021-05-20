import styled from 'styled-components';
import InfoBox from '../Infobox/infobox.component';

export const ModalContent = styled(InfoBox).attrs({ animate: true })`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  margin-top: 15vh;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-secondary);
`;

export const ModalCloseButton = styled.label`
  border-radius: 3px;
  align-self: flex-end;
  cursor: pointer;
  color: var(--color-secondary);
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(50, 50, 50, .5);
  backdrop-filter: blur(5px);
`;

export const ModalToggler = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  & + ${ModalContainer} {
    display: none;
  }

  &:checked + ${ModalContainer} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    pointer-events: auto;
  }
`;
