import React from 'react';
import StyledGlitch from './glitch.style';


interface GlitchProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

const Glitch: React.FC<GlitchProps> = ({ text, ...props}) => {
  return <StyledGlitch {...props} text={text}>{text}</StyledGlitch>;
}

export default Glitch;
