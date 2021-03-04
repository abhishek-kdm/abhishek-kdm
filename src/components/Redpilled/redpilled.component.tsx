import React from 'react';
import CommHead from './redpilled.head';
import { Link } from 'gatsby';

import GlobalCommStyle, {
  CommWrapper,
  CommHeader,
  CommMain,
  CommDetails,
  CommSummary,
} from './redpilled.style';

import About from '../About/about.component';
import Projects from '../Projects/projects.component';
import Social from '../Social/social.component';

const Comm: React.FC<{}> = () => {
  return (<>
    <GlobalCommStyle />
    <CommHead />

    <CommWrapper>
      <CommHeader>
        <small>
          <Link to={'/'}>
            [bloated version]
          </Link>
        </small>
      </CommHeader>
      <br />
      <CommMain as='main'>
        <About /><br />
        <CommDetails open>
          <CommSummary><strong>SOCIAL</strong></CommSummary>
          <Social />
        </CommDetails>
        <CommDetails>
          <CommSummary><strong>PROJECTS</strong></CommSummary>
          <Projects />
        </CommDetails><br />
      </CommMain>
    </CommWrapper>
  </>);
}

export default Comm;

