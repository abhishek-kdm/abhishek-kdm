import React from 'react';
import StyledAbout, { Pre } from './about.style';

import { BlockCursor } from '../../styles/global.style';
import { useAutoTyper } from '../../utils/hooks';
import { WARPGATE_ACTION_TIME, aboutme } from '../../configs';

interface AboutProps extends React.HTMLAttributes<HTMLElement> {
  autoType?: boolean
}

const About: React.FC<AboutProps> = ({ autoType = false, ...props }) => {
  const promptText = useAutoTyper(
    aboutme,
    (WARPGATE_ACTION_TIME * 2) + 1000,
    autoType ? 0 : aboutme.length - 1
  );

  return (<>
    <StyledAbout {...props} id={'about'}>
      <Pre>
        <h2 style={{ margin: '0' }}>
          <pre style={{ fontFamily: 'monospace', margin: '0' }}>
          </pre>
        </h2>
        {promptText}{autoType && <BlockCursor />}
      </Pre>
    </StyledAbout>
  </>);
}

export default About;

