import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { navigate } from 'gatsby';

import StyledMain, {
  MainWrapper,
  ScreenWrapper,
  Screen,
  CRTScanLines,
  ScreenDisplay,
  Speaker,
  FullscreenButton,
  VolumeButtonContainer,
  VolumeButton,
  SidePanel,
  ScreenNavigation,
  CloseButton,
  NavButtonContainer,
  NavButton,
  FullscreenModal,
} from './main.style';

import { navbarItems } from '../../Layout/configs';

import Nav from '../Nav/nav.component';

import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Modal from '../__pure__/Modal/modal.component';
import NoSignal from '../__pure__/NoSignal/noSignal.component';

import Prompt from '../__pure__/Prompt/prompt.component';
import Statusbar from '../__pure__/Statusbar/statusbar.component';

interface MainProps { }

const Main: React.FC<MainProps> = () => {
  const [noSignal, setNoSignal] = useState<boolean>(false);
  const [angle, setAngle] = useState<number>(45);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const [clickedItem, setClickedItem] = useState<string>(navbarItems[0].label);
  const [selectedScreen, setSelectedScreen] = useState<string>(navbarItems[0].label);

  const selectedItem = useMemo(() => (
    navbarItems.filter(({ label }) => label === selectedScreen)[0]
  ), [selectedScreen]);

  // adding `disabled` for avoiding clicks before 'no signal' action is completed.
  const liClassName = useCallback((label, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(noSignal ? ['disabled'] : [])
      .join(' ');
  }, [noSignal]);

  useEffect(() => {
    setSelectedScreen((c) => noSignal ? clickedItem : c);
  }, [setSelectedScreen, noSignal, clickedItem]);

  useEffect(() => {
    let t = setTimeout(() => {
      setNoSignal(false);
    }, 300);
    return () => { clearTimeout(t); }
  }, [clickedItem, setNoSignal]);

  useEffect(() => { setNoSignal(true); }, [clickedItem, setNoSignal]);

  return (<>
    <StyledMain as='main'>
      <MainWrapper>
        <ScreenNavigation>
          <ScreenWrapper>
            <Screen>
              {noSignal && <NoSignal />}
              <CRTScanLines />
              {navbarItems.map(({label, component, args, titlePrompt}, k) => (
                <ScreenDisplay scrollable
                  key={k}
                  style={{
                    display: label === selectedScreen ? 'flex' : 'None'
                  }}
                >
                  <Prompt>{titlePrompt}</Prompt>
                  {component(args)}
                </ScreenDisplay>
              ))}
              <Statusbar id='statusbar' info={selectedScreen} />
            </Screen>
          </ScreenWrapper>
          <div style={{ margin: '0 20px', position: 'relative' }}>
            <FullscreenButton
              color={'#000080'}
              style={{ left: '0' }}
              onClick={() => { setFullscreen(true); }}
            />
            <FullscreenButton
              style={{ right: '0' }}
              onClick={() => { navigate('/redpilled'); }}
            />
          </div>
          <Nav>
            <NavButtonContainer>
              {navbarItems.map(({ label }, key) => (
                <NavButton
                  key={key}
                  onClick={() => {
                    setClickedItem(label);
                    setAngle(45 + key * 20);
                  }}
                  className={liClassName(clickedItem, label)}
                >
                  {label}
                </NavButton>
              ))}
            </NavButtonContainer>
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
            [&times;]
          </CloseButton>
          <InfoBox style={{ overflow: 'auto' }}>
            <Prompt>
              {selectedItem && selectedItem.titlePrompt}
            </Prompt>
            {selectedItem && <selectedItem.component {...selectedItem.args}/>}
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
