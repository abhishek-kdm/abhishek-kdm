import React, { useState, useEffect, useCallback } from 'react';
import StyledMain, {
  MainWrapper,
  ScreenWrapper,
  Screen,
  ScreenDisplay,
  Speaker,
  FullscreenButton,
  VolumeButtonContainer,
  VolumeButton,
  SidePanel,
  ScreenNavigation,
  CloseButton,
  FullscreenModal,
  NoSignalScreen,
} from './main.style';

import Nav from '../Nav/nav.component';

import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Modal from '../__pure__/Modal/modal.component';

import Statusbar from '../__pure__/Statusbar/statusbar.component';

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
  const [noSignal, setNoSignal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(navbarItems[0].label);
  const [angle, setAngle] = useState<number>(45);
  const [clickedItem, setClickedItem] = useState<string>(selectedItem);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  // returns the component that matches the selected item.
  const displayComponent = useCallback(() => {
    const item = navbarItems.find((item) => item.label === selectedItem);
    if (item != null) {
      return <item.component />;
    }
    return null;
  }, [selectedItem]);

  // adding `disabled` for avoiding clicks before 'no signal' action is completed.
  const liClassName = useCallback((label, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(noSignal ? ['disabled'] : [])
      .join(' ');
  }, [noSignal]);

  useEffect(() => {
    setSelectedItem((c) => noSignal ? clickedItem : c);
  }, [setSelectedItem, noSignal, clickedItem]);

  useEffect(() => {
    let t = setTimeout(() => {
      setNoSignal(false);
    }, 300);
    return () => { clearTimeout(t); }
  }, [selectedItem, setNoSignal]);

  useEffect(() => { setNoSignal(true); }, [clickedItem, setNoSignal]);

  return (<>
    <StyledMain as='main'>
      <MainWrapper>
        <ScreenNavigation>
          <ScreenWrapper>
            <Screen>
              {noSignal && <NoSignalScreen>
                <span />
                <span />
                <span />
              </NoSignalScreen>}
              <ScreenDisplay scrollable>
                {displayComponent()}
              </ScreenDisplay>
              <Statusbar id='statusbar' info={selectedItem} />
            </Screen>
          </ScreenWrapper>
          <FullscreenButton onClick={() => { setFullscreen(true); }} />
          <Nav>
            <ul>
              {navbarItems.map(({ label }, key) => (
                <li
                  key={key}
                  onClick={() => {
                    setClickedItem(label);
                    setAngle(45 + key * 20);
                  }}
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
            <VolumeButton angle={angle} />
            <VolumeButton />
          </VolumeButtonContainer>
          <Speaker />
          <VolumeButtonContainer>
            <VolumeButton />
          </VolumeButtonContainer>
        </SidePanel>
      </MainWrapper>

      <Modal
        show={fullscreen}
        offset={'50px'}
        closeFunc={() => { setFullscreen(false); }}
      >
        <FullscreenModal animate={true}>
          <CloseButton onClick={() => { setFullscreen(false); }}>
            &times;
          </CloseButton>
          <InfoBox style={{ overflow: 'auto' }}>
            {displayComponent()}
          </InfoBox>
        </FullscreenModal>
      </Modal>

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
