import React, { useContext } from 'react';
import StyledFooter from './footer.style';

import { Cspan } from '../../utils/components';
import { AppContext } from '../../context';
import { THEME } from '../../configs';

import ReactLogo from '../__pure__/ReactLogo/reactLogo.component';
import Heart from '../__pure__/Heart/heart.component';


interface FooterProps { }
 
const Footer: React.FC<FooterProps> = () => {
  const { theme } = useContext(AppContext);
  return (<>
    <StyledFooter>
      <strong>
        <Cspan color={theme === THEME.protoss ? '#000' : '#fff'}>
          {'</>'}
        </Cspan>
      </strong>
      &nbsp;&nbsp;{'with'}&nbsp;&nbsp;

      <Heart beating />

      &nbsp;&nbsp;{'&'}&nbsp;&nbsp;

      <ReactLogo />
    </StyledFooter>
  </>);
}
 
export default Footer;


