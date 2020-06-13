import React from 'react';
import StyledPrompt, { PromptUser, PromptHostname } from './prompt.style';

import { Cspan } from '../../../utils/components';


interface PromptProps extends React.HTMLAttributes<HTMLSpanElement> { }

const Prompt: React.FC<PromptProps> = ({ children }) => {
  return (<>
    <StyledPrompt>
      &lambda;&nbsp;
      <PromptUser>root</PromptUser>
      <Cspan color={'rgb(83, 92, 104)'}>@</Cspan>
      <PromptHostname>root</PromptHostname>:

      &nbsp;&nbsp;
      {children}&nbsp;

      <span className={'blinking'}>_</span>
    </StyledPrompt>
  </>);
}

export default Prompt;
