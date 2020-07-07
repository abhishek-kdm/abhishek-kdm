import React from 'react';
import StyledAbout, { Pre } from './about.style';

import { BlockCursor } from '../../styles/global.style';
import { useAutoTyper } from '../../utils/hooks';
import { WARPGATE_ACTION_TIME, ABOUTME } from '../../configs';

import Prompt from '../__pure__/Prompt/prompt.component';


interface AboutProps { }

const About: React.FC<AboutProps> = () => {
  const promptText = useAutoTyper(ABOUTME, (WARPGATE_ACTION_TIME * 2) + 1000);

  return (<>
    <Prompt>{'./aboutme'}</Prompt>
    <StyledAbout id={'about'}>
      <pre style={{ margin: '0', textAlign: 'left', fontSize: '.5em', fontFamily: 'monospace' }}>
{`
██╗  ██╗   ██╗ ██████╗██╗   ██╗██╗██████╗ 
██║  ╚██╗ ██╔╝██╔════╝██║   ██║██║██╔══██╗
██║   ╚████╔╝ ██║     ██║   ██║██║██║  ██║
██║    ╚██╔╝  ██║     ██║   ██║██║██║  ██║
███████╗██║   ╚██████╗╚██████╔╝██║██████╔╝
╚══════╝╚═╝    ╚═════╝ ╚═════╝ ╚═╝╚═════╝ 
`}
      </pre>
      <hr />
      <Pre>
        {promptText} <BlockCursor />
      </Pre>
    </StyledAbout>
  </>);
}

export default About;

