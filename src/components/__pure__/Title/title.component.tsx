import React from 'react';
import './title.style.css';


interface TitleProps extends React.HTMLAttributes<HTMLSpanElement> { }
 
const Title: React.FC<TitleProps> = ({ children }) => {
  return (<>
    <span className={'title'}>
      <span className='prompt'>root@root~:</span>
      &nbsp;&nbsp;
      {children}&nbsp;
      <span className={'blinking'}>{'_'}</span>
    </span>
  </>);
}
 
export default Title;
