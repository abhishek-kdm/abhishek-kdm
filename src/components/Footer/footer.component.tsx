import React, { useContext } from 'react';
import StyledFooter from './footer.style';

import { Cspan } from '../../utils/components';
import { RACE } from '../../configs';
import { ThemeContext } from 'styled-components';

import ReactLogo from '../__pure__/ReactLogo/reactLogo.component';
import Heart from '../__pure__/Heart/heart.component';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  const theme = useContext(ThemeContext);
  return (<>
    <StyledFooter>
      <strong>
        <Cspan color={theme.race === RACE.protoss ? '#000' : '#fff'}>
          {'</>'}
        </Cspan>
      </strong>
      &nbsp;&nbsp;{'with'}&nbsp;&nbsp;
      <Heart />
      &nbsp;&nbsp;{'&'}&nbsp;&nbsp;
      <ReactLogo />
    </StyledFooter>
  </>);
}

export default Footer;


