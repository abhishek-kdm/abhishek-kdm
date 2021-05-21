import React from 'react';
import StyledContactForm, {
  NameInput,
  EmailInput,
  MessageInput,
  SubmitButton,
} from './contactForm.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Modal from '../__pure__/Modal/modal.component';

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
  return (<>
    <Modal id='contact-form'>
      <StyledContactForm>
        <label htmlFor='name'>Name:</label>
        <NameInput />
        <label htmlFor='email'>Email:</label>
        <EmailInput />
        <label htmlFor='message'>Message:</label>
        <MessageInput />

        <SubmitButton>
          Send
          <FontAwesomeIcon icon={faPaperPlane} />
        </SubmitButton>
      </StyledContactForm>
    </Modal>
  </>);
}

export default ContactForm;
