import styled from 'styled-components';

const StyledModal = styled.div<{ opacity: number, offset: string }>`
  position: fixed;
  z-index: 100000;
  padding-top: ${({ offset }) => offset};
  left: 0;
  top: 0;
  width: 100%!important;
  height: 100%!important;
  overflow: auto;
  background-color: ${({ opacity }) => `rgba(0, 0, 0, ${opacity})`};
`;

export const ModalContent = styled.div`
  margin: auto;
  padding: auto;
  display: block;
  border: none;
  width: 80%;
  max-width: 60rem;
  background: rgba(0, 0, 0, 0);
`;

export default StyledModal;

