import React from 'react';
import './statusbar.style.css';

import { useCurrentDate } from '../../../utils/hooks';
import { doubleDigit } from '../../../utils';


const toShellFormat = function(date: Date) {
  let [month, day, year] = date
    .toLocaleDateString()
    .split('/');

  day = doubleDigit(day);
  month = doubleDigit(month);
  const hours = doubleDigit(date.getHours());
  const minutes = doubleDigit(date.getMinutes());
  const seconds = doubleDigit(date.getSeconds());

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}


interface StatusbarProps extends React.HTMLAttributes<HTMLDivElement> {
  info: string
}
 
const Statusbar: React.FC<StatusbarProps> = ({ info, ...rest }) => {
  const date = useCurrentDate();

  return (<>
    <div id='statusbar' {...rest}>
      <div className='time'>{toShellFormat(date)}</div>
      <span className='info'>{info}</span>
    </div>
  </>);
}
 
export default Statusbar;
