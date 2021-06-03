import React from 'react';

import { Container } from '../../Styles/global.style';
import About from '../About/about.component';
import ContactInfo from '../ContactInfo/contactInfo.component';
import Social from '../Social/social.component';

const Noscript: React.FC = () => {
  return (
    <noscript>
      <Container
        style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        as='header'
      >
        <div style={{ flex: 1 }}>
          <About />
          <Social />
        </div>
        <small>
          <hr className='inverted' />
          <ContactInfo />
        </small>
      </Container>
    </noscript>
  );
};

export default Noscript;
