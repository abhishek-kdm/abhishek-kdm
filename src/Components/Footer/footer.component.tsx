import React, { useRef, useState, useEffect } from 'react';
import StyledFooter, { ThemeToggler, ContactButton } from './footer.style';

import Modal from '../__pure__/Modal/modal.component';
import ContactInfo from '../ContactInfo/contactInfo.component';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [runtime, setRuntime] = useState<boolean>(false);

  useEffect(() => setRuntime(true), []);

  return (
    <>
      <StyledFooter {...props}>
        <ContactButton onClick={() => modalRef?.current?.showModal()}>
          contact
        </ContactButton>
        <ThemeToggler />
      </StyledFooter>

      {runtime && (
        <Modal ref={modalRef} style={{ maxWidth: '375px' }}>
          <ContactInfo />
        </Modal>
      )}
    </>
  );
};

export default Footer;
