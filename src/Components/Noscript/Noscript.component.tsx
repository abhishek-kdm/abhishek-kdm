import React from 'react';
import StyledNoscript, { Header } from './Noscript.style';

import About from '../About/About.component';
import Social from '../Social/Social.component';
import ContactInfo from '../ContactInfo/ContactInfo.component';

const Noscript: React.FC = () => {
  return (
    <StyledNoscript>
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
    </StyledNoscript>
  );
};

export default Noscript;
