import React, { useContext } from 'react';
import './footer.style.css';

import { Cspan } from '../../utils/components';
import { AppContext } from '../../context';
import { THEME } from '../../configs';

import ReactLogo from '../__pure__/ReactLogo/reactLogo.component';
import Heart from '../__pure__/Heart/heart.component';


interface FooterProps { }
 
const Footer: React.FC<FooterProps> = () => {
  const { theme } = useContext(AppContext);
  return (<>
    <footer>
      <strong>
        <Cspan color={theme === THEME.protoss ? '#000' : '#fff'}>
          {'</>'}
        </Cspan>
      </strong>
      &nbsp;&nbsp;{'with'}&nbsp;&nbsp;

      <Heart beating />

      &nbsp;&nbsp;{'&'}&nbsp;&nbsp;

      <ReactLogo />
    </footer>
  </>);
}
 
export default Footer;


