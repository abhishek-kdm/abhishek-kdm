import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import StyledHeader, { HeaderTitle, Brand, RocketImgWrapper, RocketImg } from './header.style';

import { navigate } from '@reach/router';

import ThemeToggler from '../ThemeToggler/themeToggler.component';

import { WARPGATE_ACTION_TIME, WARPGATES_OPEN_DELAY } from '../../configs';
import { HomeContext } from '../../context';


interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const { setWarpGateOpen } = useContext(HomeContext);
  const { Rocket } = useStaticQuery(graphql`
    query {
      Rocket: file(relativePath: {eq: "rocket.svg"}) {
        publicURL
      }
    }
  `);

  return (<>
    <StyledHeader as='header'>
      <HeaderTitle>
        <Brand style={{ marginRight: '1rem' }}>lycuid</Brand>
        <RocketImgWrapper>
          <RocketImg
            src={Rocket.publicURL}
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
        </RocketImgWrapper>

      </HeaderTitle>
      <ThemeToggler />
    </StyledHeader>
  </>);
}

export default Header;

