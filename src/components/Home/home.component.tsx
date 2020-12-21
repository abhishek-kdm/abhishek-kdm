import React, { useEffect, useState, useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { PageProps as GatsbyPageProps, navigate } from 'gatsby';

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

type HistoryLocationState = { docking: boolean };
interface HomeProps extends GatsbyPageProps<object, object, HistoryLocationState> { }

const Home: React.FC<HomeProps> = ({ location }) => {
  const { race } = useContext(AppContext);
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(
    !location.state?.docking
  );

  useEffect(() => {
    if (location.state?.docking) navigate('.', { replace: true });
  }, [location.state]);

  useEffect(() => {
    if (!warpGateOpen)
      setTimeout(() => { setWarpGateOpen(true); }, WARPGATE_ACTION_TIME);
  }, [warpGateOpen]);

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
