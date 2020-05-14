import React from 'react';
import StyledStatusbar, { Time, Info } from './statusbar.style';

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
 
const Statusbar: React.FC<StatusbarProps> = ({ info, ...props }) => {
  const date = useCurrentDate();

  return (<>
    <StyledStatusbar {...props}>
      <Time>{toShellFormat(date)}</Time>
      <Info>{info}</Info>
    </StyledStatusbar>
  </>);
}
 
export default Statusbar;
