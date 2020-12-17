import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { PageWrapper } from './layout.style';

import WarpDoorSVGDefs from '../components/__pure__/Warpgate/WarpDoors/terran.warpdoors';
import GlobalSVGFilters from '../components/__pure__/SVG/Filters';

import { AppContext } from '../context';
import { GITHUB, RACE, RACE_PROPS } from '../configs';
import { fetchJson } from '../utils';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends RaceProps {
    race: Race
  }
}

interface LayoutProps { }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [race, setRace] = useState<Race>(RACE.terran);
  const [repos, setRepos] = useState<any>(null);

  useEffect(() => {
    fetchJson(GITHUB.user_url)
      .then(({ repos_url }) => fetchJson(repos_url))
      .then(repos => setRepos(repos));
  }, []);

  return (<>
    <ThemeProvider theme={() => {
      switch(race) {
        case RACE.zerg: return { race, ...RACE_PROPS.zerg }
        case RACE.terran: return { race, ...RACE_PROPS.terran }
        default: return { race, ...RACE_PROPS.protoss }
      }
    }}>
      <AppContext.Provider value={{ repos, race, setRace }}>
        <PageWrapper>
          <svg width={0} height={0}>
            <WarpDoorSVGDefs />
            <GlobalSVGFilters />
          </svg>
          {children}
        </PageWrapper>
      </AppContext.Provider>
    </ThemeProvider>
  </>);
}

export default Layout;

