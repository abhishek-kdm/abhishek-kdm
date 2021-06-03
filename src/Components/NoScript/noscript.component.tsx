import React from 'react';
import StyledNoScript, { Header } from './noscript.style';

import About from '../About/about.component';
import ContactInfo from '../ContactInfo/contactInfo.component';
import Social from '../Social/social.component';

const Noscript: React.FC = () => {
  return (
    <StyledNoScript>
      <Header>
        <div>
          <About />
          <Social />
        </div>
        <small>
          <hr className='inverted' />
          <ContactInfo />
        </small>
      </Header>
    </StyledNoScript>
  );
};

export default Noscript;
