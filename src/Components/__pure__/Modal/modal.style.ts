import styled from 'styled-components';
import InfoBox from '../Infobox/infobox.component';

const StyledModal = styled(InfoBox).attrs({ animate: true, retro: true })`
  padding: 1rem;
  position: relative;
  margin-top: 15vh;
  background-color: var(--color-bg-secondary);

  border: 1px solid var(--color-secondary);
  box-shadow: 0.3rem 0.3rem 0 var(--color-shadow);
`;

export const ModalCloseButton = styled.label`
  position: absolute;
  font-weight: small;
  width: 1.5rem;
  height: 1.5rem;
  top: -.8rem;
  right: -.8rem;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-secondary);
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-secondary);
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: flex-start;
  z-index: 9999;
  background-color: rgba(50, 50, 50, .5);
  backdrop-filter: blur(5px);
`;

export const ModalToggler = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  & + ${ModalContainer} {
    display: none;
  }

  :checked + ${ModalContainer} {
    display: flex;
  }
`;

export default StyledModal;
