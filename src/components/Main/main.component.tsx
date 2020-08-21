import React, { useState, useEffect, useCallback } from 'react';
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

import { navigate } from '@reach/router';

import { useNavigationTabs } from '../../utils/hooks';
import { navbarItems } from '../../Layout/configs';

import Nav from '../Nav/nav.component';

import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Modal from '../__pure__/Modal/modal.component';
import NoSignal from '../__pure__/NoSignal/noSignal.component';

import Prompt from '../__pure__/Prompt/prompt.component';
import Statusbar from '../__pure__/Statusbar/statusbar.component';

interface MainProps { }

const Main: React.FC<MainProps> = () => {
  // controls open/close of the warpgaetes.
  const {
    selectedItem,
    selection,
    setSelection
  } = useNavigationTabs<NavbarItem>(navbarItems, 'label');

  const [noSignal, setNoSignal] = useState<boolean>(false);
  const [angle, setAngle] = useState<number>(45);
  const [clickedItem, setClickedItem] = useState<string>(selection);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  // adding `disabled` for avoiding clicks before 'no signal'
  // action is completed.
  const liClassName = useCallback((label, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(noSignal ? ['disabled'] : [])
      .join(' ');
  }, [noSignal]);

  useEffect(() => {
    setSelection((c) => noSignal ? clickedItem : c);
  }, [setSelection, noSignal, clickedItem]);

  useEffect(() => {
    let t = setTimeout(() => {
      setNoSignal(false);
    }, 300);
    return () => { clearTimeout(t); }
  }, [selection, setNoSignal]);

  useEffect(() => { setNoSignal(true); }, [clickedItem, setNoSignal]);

  return (<>
    <StyledMain as='main'>
      <MainWrapper>
        <ScreenNavigation>
          <ScreenWrapper>
            <Screen>
              {noSignal && <NoSignal />}
              <CRTScanLines />
              <ScreenDisplay scrollable>
                <Prompt>
                  {selectedItem && selectedItem.titlePrompt}
                </Prompt>
                {selectedItem && <selectedItem.component {...selectedItem.args} />}
              </ScreenDisplay>
              <Statusbar id='statusbar' info={selection} />
            </Screen>
          </ScreenWrapper>
          <div style={{ margin: '0 20px', position: 'relative' }}>
            <FullscreenButton
              style={{ left: '0', backgroundColor: '#000080' }}
              onClick={() => { setFullscreen(true); }}
            />
            <FullscreenButton
              style={{ right: '0' }}
              onClick={() => { navigate('/redpillout'); }}
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
