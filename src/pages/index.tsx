import React, { useEffect, useState } from 'react';

import { HomeContext } from '../context';
import { WARPGATE_ACTION_TIME } from '../configs';

import { DualWarpGate } from '../components/__pure__/Warpgate/warpgate.component';

import Head from '../Head/head.component';
import Header from '../components/Header/header.component';
import Main from '../components/Main/main.component';
import Footer from '../components/Footer/footer.component';


const StillInDevelopment: React.FC = () => {
  return (<>
    <div style={{
      position: 'absolute',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'dodgerblue',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        width: '150px',
        alignSelf: 'center',
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        &#x26A0;&nbsp;&nbsp;&nbsp;{'Still in development!.'}
      </span>
    </div>
  </>);
}


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
