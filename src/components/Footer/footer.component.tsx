import React from 'react';
import './footer.style.css';

import ReactLogo from '../__pure__/ReactLogo/reactLogo.component';
import Heart from '../__pure__/Heart/heart.component';


interface FooterProps { }
 
const Footer: React.FC<FooterProps> = () => {
  return (<>
    <footer>
      {'Built with'}&nbsp;

      <Heart beating />

      &nbsp;{'&'}&nbsp;

      <ReactLogo />
    </footer>
  </>);
}
 
export default Footer;


