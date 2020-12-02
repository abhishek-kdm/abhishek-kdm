import React, { useEffect, useState, useContext } from 'react';
import HomeHead from './home.head';
import GlobalIndexStyle from './home.style';
import RaceStyle from '../../styles/race.style';

import { AppContext, HomeContext } from '../../context';
import { RACE, WARPGATE_ACTION_TIME } from '../../configs';

import { DualWarpGate } from '../__pure__/Warpgate/warpgate.component';

import { StillInDevelopment } from '../../utils/components';
import Header from '../Header/header.component';
import Main from '../Main/main.component';
import Footer from '../Footer/footer.component';

const Home: React.FC = () => {
  const { race } = useContext(AppContext);
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setWarpGateOpen(true); }, WARPGATE_ACTION_TIME);
  }, []);

  return (<>
    <HomeContext.Provider value={{ setWarpGateOpen }}>
      <HomeHead />
      <GlobalIndexStyle />
      <RaceStyle />

      <DualWarpGate open={warpGateOpen} />
      {race === RACE.protoss && <StillInDevelopment />}

      <Header />
      <Main />
      <Footer />
    </HomeContext.Provider>
  </>);
}

export default Home;
