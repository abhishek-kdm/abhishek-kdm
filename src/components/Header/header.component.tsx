import React, { useContext } from 'react';
import './header.style.css';

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
    <header>
      <div className='container'>
        <h1 className={'header-title'}>
          <span style={{ marginRight: '1rem' }}>
            <span className={'glitch'} data-text={'abh'}>abh</span>
            <span className={'glitch'} data-text={'\u2148'}>&#x2148;</span>
            <span className={'glitch'} data-text={'shek.'}>shek.</span>
          </span>
          <span
            style={{
              transform: 'rotate(45deg)',
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={Rocket}
              alt='explore space'
              className={'rocket'}
              title={'EJECT!'}
              onClick={() => {
                setTimeout(() => {
                  navigate('/explore');
                }, WARPGATE_ACTION_TIME + (WARPGATES_OPEN_DELAY * 2));
                setWarpGateOpen(false);
              }}
            />
          </span>
        </h1>
        <ThemeToggler />
      </div>
    </header>
  </>);
}

export default Header;

