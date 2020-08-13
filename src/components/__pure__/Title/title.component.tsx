import React from 'react';
import StyledTitle from './title.style';


interface TitleProps {  }

const Title: React.FC<TitleProps> = ({ children }) => {
  return (<>
    <StyledTitle>[{children}]</StyledTitle>
  </>);
}

export default Title;

