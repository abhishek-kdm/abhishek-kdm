import React from 'react';
import { Link } from 'gatsby';
import GlobalCommStyle, {
  CommWrapper,
  CommHeader,
  CommMain,
  CommDetails,
  CommSummary,
} from './redpillout.style';

import Head from '../head';
import About from '../components/About/about.component';
import Projects from '../components/Projects/projects.component';
import Social from '../components/Social/social.component';

const Comm: React.FC<{}> = () => {
  return (<>
    <Head />
    <GlobalCommStyle />

    <CommWrapper>
      <CommHeader as='header'>
        <small>
          [<Link to={'/'}>
            back to bloat
          </Link>]
        </small>
      </CommHeader>
      <br />
      <CommMain as='main'>
        <About /><br />
        <CommDetails open>
          <CommSummary><strong>SOCIAL</strong></CommSummary>
          <Social />
        </CommDetails>
        <CommDetails open>
          <CommSummary><strong>PROJECTS</strong></CommSummary>
          <Projects />
        </CommDetails><br />
      </CommMain>
    </CommWrapper>
  </>);
}

export default Comm;

