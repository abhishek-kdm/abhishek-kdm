import React, { useState, useEffect, useCallback } from 'react';
import StyledMain, {
  MainWrapper,
  ScreenWrapper,
  Screen,
  ScreenDisplay,
  Speaker,
  VolumeButtonContainer,
  VolumeButton,
  SidePanel,
  ScreenNavigation
} from './main.style';

import Nav from '../Nav/nav.component';
import Warpgate from '../__pure__/Warpgate/warpgate.component';

import Statusbar from '../__pure__/Statusbar/statusbar.component';
import { WARPGATES_OPEN_DELAY } from '../../configs';
import { range } from '../../utils';

import About from '../About/about.component';
import Projects from '../Projects/projects.component';
import Social from '../Social/social.component';

const navbarItems: NavbarItem[] = [
  { label: 'about', component: About },
  { label: 'projects', component: Projects },
  { label: 'social', component: Social },
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
    <StyledMain>
      <MainWrapper>
        <ScreenNavigation>
          <ScreenWrapper>
            <Warpgate
              onClose={warpGatesOnClose}
              open={warpgateOpen}
              orientation={'horizontal'}
              style={{ zIndex: 5, borderRadius: '6px' }}
            />
            <Screen>
              <ScreenDisplay scrollable>
                {displayComponent()}
              </ScreenDisplay>
              <Statusbar id='statusbar' info={selectedItem} />
            </Screen>
          </ScreenWrapper>
          <Nav>
            <ul>
              {navbarItems.map(({ label }, key) => (
                <li
                  key={key}
                  onClick={() => { setClickedItem(label); }}
                  className={liClassName(clickedItem, label)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </Nav>
        </ScreenNavigation>

        <SidePanel>
          <VolumeButtonContainer>
            {range(2, (_, i) => (
              <VolumeButton
                angle={i == 0 ? 45 : null}
                key={'vol-1-' + String(i)}
            />))}
          </VolumeButtonContainer>
          <Speaker />
          <VolumeButtonContainer>
            <VolumeButton />
          </VolumeButtonContainer>
        </SidePanel>
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
