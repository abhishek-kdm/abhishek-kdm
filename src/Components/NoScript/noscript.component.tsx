import React from 'react';

import { Container } from '../../Styles/global.style';
import About from '../About/about.component';
import Social from '../Social/social.component';
import Projects from '../Projects/projects.component';

const Noscript: React.FC = () => {
  return (
    <noscript>
      <Container>
        <About />
        <h2>Social</h2>
        <Social />
        <h2>Projects</h2>
        <Projects />
      </Container>
    </noscript>
  )
}

export default Noscript;
