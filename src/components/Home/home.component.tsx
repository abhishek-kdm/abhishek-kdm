import React, { useEffect, useState } from 'react';
import GlobalIndexStyle from './home.style';
import RaceStyle from '../../styles/race.style';

import { HomeContext } from '../../context';
import { WARPGATE_ACTION_TIME } from '../../configs';

import { DualWarpGate } from '../__pure__/Warpgate/warpgate.component';

import { StillInDevelopment } from '../../utils/components';
import Head from '../../head';
import Header from '../Header/header.component';
import Main from '../Main/main.component';
import Footer from '../Footer/footer.component';


const Home: React.FC = () => {
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setWarpGateOpen(true); }, WARPGATE_ACTION_TIME);
  }, []);

  return (<>
    <HomeContext.Provider value={{ setWarpGateOpen }}>
      <Head>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' />
      </Head>

      <GlobalIndexStyle />
      <RaceStyle />

      <DualWarpGate open={warpGateOpen} />
      <StillInDevelopment />

      <Header />
      <Main />
      <Footer />
    </HomeContext.Provider>
  </>);
}

export default Home;
