import React from 'react';
import './title.style.css';
import { Cspan } from '../../../utils/components';


interface TitleProps extends React.HTMLAttributes<HTMLSpanElement> { }
 
const Title: React.FC<TitleProps> = ({ children }) => {
  return (<>
    <span className={'title'}>
      <span className='prompt'>
        &lambda;&nbsp;
        <span className='user'>root</span>
        <Cspan color={'rgb(83, 92, 104)'}>@</Cspan>
        <span className='machine'>root</span>:
      </span>
      &nbsp;&nbsp;
      {children}&nbsp;
      <span className={'blinking'}>_</span>
    </span>
  </>);
}
 
export default Title;
