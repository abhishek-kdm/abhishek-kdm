import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

import HyperdriveComponent from '../../components/__pure__/Hyperdrive/hyperdrive.component';
import { DualWarpGate } from '../../components/__pure__/Warpgate/warpgate.component';

import { WARPGATE_ACTION_TIME, WARPGATES_OPEN_DELAY } from '../../configs';
import Head from '../../head';


interface ExploreProps { }

const Explore: React.FC<ExploreProps> = () => {
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setWarpGateOpen(true); }, WARPGATE_ACTION_TIME);
  }, []);

  useEffect(() => {
    const goHome = (e: KeyboardEvent) => {
      if (e.which === 13) {
        e.preventDefault();
        setTimeout(() => {
          navigate('/');
        }, WARPGATE_ACTION_TIME + (WARPGATES_OPEN_DELAY * 2));
        setWarpGateOpen(false);
      }
    }

    document.addEventListener('keypress', goHome);
    return () => document.removeEventListener('keypress', goHome);
  }, []);

  return (<>
    <Head title={'Exploring Space!.'} absoluteTitle />
    <DualWarpGate open={warpGateOpen} />
    <HyperdriveComponent />
  </>);
}

export default Explore;
