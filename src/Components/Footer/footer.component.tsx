import React, { useRef } from 'react';
import StyledFooter, { ThemeToggler, ContactButton } from './footer.style';

import Modal from '../__pure__/Modal/modal.component';
import ContactInfo from '../ContactInfo/contactInfo.component';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <StyledFooter {...props}>
        <ContactButton onClick={() => modalRef?.current?.showModal()}>
          contact
        </ContactButton>
        <ThemeToggler />
      </StyledFooter>

      <Modal ref={modalRef} style={{ maxWidth: '375px' }}>
        <ContactInfo />
      </Modal>
    </>
  );
};

export default Footer;
