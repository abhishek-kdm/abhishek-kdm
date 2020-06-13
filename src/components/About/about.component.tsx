import React from 'react';
import './about.style.css';

import { useAutoTyper } from '../../utils/hooks';
import { WARPGATE_ACTION_TIME, ABOUTME } from '../../configs';

import Prompt from '../__pure__/Prompt/prompt.component';


interface AboutProps { }

const About: React.FC<AboutProps> = () => {
  const promptText = useAutoTyper(ABOUTME, (WARPGATE_ACTION_TIME * 2) + 1000);

  return (<>
    <Prompt>{'./aboutme'}</Prompt>
    <div id={'about'}>
      <pre>
        {promptText} <span className='blinking'>&#x2588;</span>
      </pre>
    </div>
  </>);
}

export default About;

