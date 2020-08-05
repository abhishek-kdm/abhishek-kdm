import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/global.style';

import { PageWrapper } from './layout.style';
import { ThemeProvider } from 'styled-components';

import Modal from '../components/__pure__/Modal/modal.component';
import InfoBox from '../components/__pure__/InfoBox/infoBox.component';
import WarpDoorSVGDefs from '../components/__pure__/Warpgate/WarpDoors/terran.warpdoors';

import { AppContext } from '../context';
import { GITHUB, RACE, RACE_PROPS } from '../configs';
import { fetchJson } from '../utils';
import { Cspan } from '../utils/components';
import GlobalSVGFilters from '../components/__pure__/SVG/Filters';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends RaceProps {
    race: Race
  }
}

interface LayoutProps { }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [race, setRace] = useState<Race>(RACE.terran);

  const [modalShow, setModalShow] = useState<boolean>(false);

  return (<>
    <ThemeProvider theme={() => {
      switch(race) {
        case RACE.zerg: return { race, ...RACE_PROPS.zerg }
        case RACE.terran: return { race, ...RACE_PROPS.terran }
        default: return { race, ...RACE_PROPS.protoss }
      }
    }}>
      <AppContext.Provider value={{ setRace, setModalShow }}>

        <GlobalStyle />

        <PageWrapper>
          <svg width={0} height={0}>
            <WarpDoorSVGDefs />
            <GlobalSVGFilters />
          </svg>
          {children}
          <Modal
            show={modalShow}
            closeFunc={() => { setModalShow(false); }}
          >
            <InfoBox animate={true} style={{ textAlign: 'center' }}>
              <div>
                <Cspan color={'white'}>{'`arrows`.'}</Cspan><br />
              </div>
              <div>
                To go faster in&nbsp;
                <Cspan color={'white'}>{'`space`'}</Cspan>
                , push it.<br />
              </div>
              <div>
                to&nbsp;
                <Cspan color={'white'}>{'`escape`'}</Cspan>
                , just do so.<br />
              </div>
            </InfoBox>
          </Modal>
        </PageWrapper>
      </AppContext.Provider>
    </ThemeProvider>
  </>);
}

export default ({ element }: { element: any }) => <Layout>{element}</Layout>;
