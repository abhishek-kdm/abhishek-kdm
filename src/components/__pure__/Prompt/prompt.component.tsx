import React from 'react';
import StyledPrompt, { PromptUser, PromptHostname } from './prompt.style';

import { Cspan } from '../../../utils/components';


interface PromptProps extends React.HTMLAttributes<HTMLSpanElement> { }

const Prompt: React.FC<PromptProps> = ({ children, ...props }) => {
  return (<>
    <StyledPrompt {...props}>
      &lambda;&nbsp;
      <PromptUser>root</PromptUser>
      <Cspan color={'rgb(83, 92, 104)'}>@</Cspan>
      <PromptHostname>root</PromptHostname>:~&nbsp;
      {children}&nbsp;
    </StyledPrompt>
  </>);
}

export default Prompt;
