import React, { useState, useEffect, useCallback, useContext } from 'react';
import StyledMain, { MainWrapper, ScreenWrapper, Screen, SVGDash } from './main.style';

import Nav from '../Nav/nav.component';
import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Warpgate from '../__pure__/Warpgate/warpgate.component';

import Statusbar from '../__pure__/Statusbar/statusbar.component';
import { WARPGATES_OPEN_DELAY } from '../../configs';

import About from '../About/about.component';
import Social from '../Social/social.component';
import Projects from '../Projects/projects.component';

const navbarItems: NavbarItem[] = [
  { label: 'about', component: About },
  { label: 'social', component: Social },
  { label: 'projects', component: Projects },
];


interface MainProps { }

const Main: React.FC<MainProps> = () => {
  // controls open/close of the warpgaetes.
  const [warpgateOpen, setWarpgateOpen] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<string>(navbarItems[0].label);
  const [clickedItem, setClickedItem] = useState<string>(selectedItem);

  // returns the component that matches the selected item.
  const displayComponent = useCallback(() => {
    const item = navbarItems.find((item) => item.label === selectedItem);
    if (item != null) {
      return <item.component />;
    }
    return null;
  }, [selectedItem]);

  // adding `disabled` for avoiding clicks before warpgates action is completed.
  const liClassName = useCallback((label, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(clickedItem !== selectedItem ? ['disabled'] : [])
      .join(' ');
  }, [clickedItem, selectedItem]);

  const warpGatesOnClose = useCallback(() => {
    setSelectedItem(clickedItem);
    let t = setTimeout(() => {
      setWarpgateOpen(true);
    }, WARPGATES_OPEN_DELAY);

    return () => { clearTimeout(t); };
  }, [clickedItem, setSelectedItem, setWarpgateOpen]);

  useEffect(() => { setWarpgateOpen(false); }, [clickedItem, setWarpgateOpen]);

  return (<>
    <StyledMain className={'container'}>
      <MainWrapper>
        <ScreenWrapper>
          <Warpgate
            onClose={warpGatesOnClose}
            open={warpgateOpen}
            orientation={'horizontal'}
            style={{ zIndex: 5, borderRadius: '6px' }}
          />
          <Screen>
            <InfoBox scrollable id='screen-box'>
              {displayComponent()}
            </InfoBox>
            <Statusbar id='statusbar' info={selectedItem} />
          </Screen>
        </ScreenWrapper>

        <Nav id={'screen-navigator'}>
          <ul>
            {navbarItems.map(({ label }, key) => (
              <li
                key={key}
                onClick={() => { setClickedItem(label); }}
                className={liClassName(clickedItem, label)}
              >
                {label}
                <SVGDash viewBox={'0 0 40 1'}>
                  <path d={'M0 1 H40'}></path>
                </SVGDash>
              </li>
            ))}
          </ul>
        </Nav>
      </MainWrapper>

      <svg width='0' height='0'>
        <defs>
          <clipPath id='screen-curve' clipPathUnits='objectBoundingBox'>
            <path d='M0.05 0.05 Q0.5 0, 0.95 0.05 Q1 0.5, 0.95 0.95 Q0.5 1, 0.05 0.95 Q0 0.5, 0.05 0.05' />
          </clipPath>
        </defs>
      </svg>
    </StyledMain>
  </>);
}

export default Main;
