import React from 'react';

import { Container } from '../../Styles/global.style';
import About from '../About/about.component';
import Social from '../Social/social.component';

const Noscript: React.FC = () => {
  return (
    <noscript>
      <Container as='main'>
        <About />
        <Social />
      </Container>
    </noscript>
  )
}

export default Noscript;
