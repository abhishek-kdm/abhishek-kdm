import React, { useEffect, useState, useCallback } from 'react';

import {
  WARPSTATE,
  WARPGATES_OPEN_DELAY,
  WARPGATE_ACTION_TIME,
  FULL_SCREEN_STYLE
} from '../../configs';

import Header from '../Header/header.component';
import Home from '../Home/home.component';
import Footer from '../Footer/footer.component';

import HyperdriveComponent from '../__pure__/Hyperdrive/hyperdrive.component';
import { DualWarpGate } from '../__pure__/Warpgate/warpgate.component';

const MainComponents = [
  {
    name: 'hyperdrive',
    component: HyperdriveComponent,
    attrs: { style: FULL_SCREEN_STYLE },
  },
  {
    name: 'body',
    // eslint-disable-next-line react/display-name
    component: (() => <><Header /><Home /><Footer /></>),
    attrs: {},
  },
];


interface SpaceExplorerProps { warpState: WarpState }
 
const SpaceExplorer: React.FC<SpaceExplorerProps> = ({ warpState }) => {

  // controlling open/close of the dual warpgate.
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>('body');

  const displayComponent = useCallback(() => {
    const item = MainComponents.find((item) => item.name === activeComponent);
    if (item != null) {
      return <item.component {...item.attrs}/>;
    }
    return <></>;
  }, [activeComponent]);


  useEffect(() => {
    let t1: any, t2: any;
    // time reference for opening warpgates after closing them
    // and the close delay.
    const warpgatesDelay = WARPGATES_OPEN_DELAY + (WARPGATE_ACTION_TIME * 2);
    switch (warpState) {
      case WARPSTATE.warpin:
        setWarpGateOpen(false);
        t1 = setTimeout(() => { setActiveComponent('body') }, WARPGATE_ACTION_TIME);
        t2 = setTimeout(() => { setWarpGateOpen(true); }, warpgatesDelay);
        break;
    
      default:
        setWarpGateOpen(false);
        t1 = setTimeout(() => { setActiveComponent('hyperdrive') }, WARPGATE_ACTION_TIME);
        t2 = setTimeout(() => { setWarpGateOpen(true); }, warpgatesDelay);
        break;
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    }
  }, [warpState]);


  return (<>
    <DualWarpGate open={warpGateOpen} />
    {displayComponent()}
  </>);
}

export default SpaceExplorer;
