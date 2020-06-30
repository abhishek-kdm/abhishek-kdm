import React, { useEffect, useState } from 'react';

import { HomeContext } from '../context';
import { WARPGATE_ACTION_TIME } from '../configs';

import { DualWarpGate } from '../components/__pure__/Warpgate/warpgate.component';

import { StillInDevelopment } from '../utils/components';
import Head from '../head';
import Header from '../components/Header/header.component';
import Main from '../components/Main/main.component';
import Footer from '../components/Footer/footer.component';


const App: React.FC = () => {
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setWarpGateOpen(true); }, WARPGATE_ACTION_TIME);
  }, []);

  return (<>
    <HomeContext.Provider value={{ setWarpGateOpen }}>
      <Head />

      <DualWarpGate open={warpGateOpen} />
      <StillInDevelopment />

      <Header />
      <Main />
      <Footer />
    </HomeContext.Provider>
  </>);
}

export default App;
