import React from 'react';
import StyledContactInfo from './contactInfo.style';
import { Anchor } from '../../Styles/global.style';

interface ContactInfoProps {}

const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <>
      <StyledContactInfo>
        <p>
          Get in touch with email&nbsp;
          <Anchor href='mailto:lycuid@gmail.com'>lycuid@gmail.com</Anchor>. Use
          this&nbsp;
          <Anchor target='_blank' href='/pubkey.asc'>
            public key
          </Anchor>
          &nbsp;to encrypt your message.
        </p>
      </StyledContactInfo>
    </>
  );
};

export default ContactInfo;
