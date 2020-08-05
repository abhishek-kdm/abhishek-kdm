import React, { useContext } from 'react';
import StyledHeader, { HeaderTitle, Brand, RocketImg } from './header.style';

import { navigate } from '@reach/router';

// @ts-ignore
import Rocket from '../../rocket.svg';
import ThemeToggler from '../ThemeToggler/themeToggler.component';

import { WARPGATE_ACTION_TIME, WARPGATES_OPEN_DELAY } from '../../configs';
import { HomeContext } from '../../context';


interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const { setWarpGateOpen } = useContext(HomeContext);

  return (<>
    <StyledHeader as='header'>
      <HeaderTitle>
        <Brand style={{ marginRight: '1rem' }}>lycuid</Brand>
        <span style={{ transform: 'rotate(45deg)', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
          <RocketImg
            src={Rocket}
            alt='explore space'
            className={'rocket'}
            title={'EJECT!'}
            onClick={() => {
              setTimeout(
                () => { navigate('/explore'); },
                WARPGATE_ACTION_TIME + (WARPGATES_OPEN_DELAY * 2)
              );
              setWarpGateOpen(false);
            }}
          />
        </span>

      </HeaderTitle>
      <ThemeToggler />
    </StyledHeader>
  </>);
}

export default Header;

