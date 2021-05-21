import styled from 'styled-components';
import { ShadowButtonCSS } from '../../Styles/global.style';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 350px;
  max-width: 80%;

  input, textarea {
    padding: 7.5px 15px;
    border-radius: 3px;
    border: none;
    color: var(--color-primary);
    background-color: var(--color-bg-primary);
  }
`;

export const ContactFormToggler = styled.label.attrs({ htmlFor: 'contact-form' })``;

export const NameInput = styled.input.attrs({
  required: true,
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Name..'
})`
  resize: true;
`;
export const EmailInput = styled.input.attrs({
  required: true,
  type: 'email',
  id: 'email',
  name: 'email',
  placeholder: 'Email..'
})``;

export const MessageInput = styled.textarea.attrs({
  required: true,
  rows: 5,
  id: 'message',
  name: 'message',
  placeholder: 'Message..'
})``;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  ${ShadowButtonCSS}
  gap: 10px;
`;

export default StyledContactForm;
