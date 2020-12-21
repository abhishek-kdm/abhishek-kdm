import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { PageProps as GatsbyPageProps, navigate } from 'gatsby';

import HyperdriveComponent from '../__pure__/Hyperdrive/hyperdrive.component';
import FloatingButton from '../__pure__/FloatingButton/floatingButton.component';
import Modal from '../__pure__/Modal/modal.component';
import InfoBox from '../__pure__/InfoBox/infoBox.component';

import { DualWarpGate } from '../__pure__/Warpgate/warpgate.component';

import { WARPGATE_ACTION_TIME, WARPGATES_OPEN_DELAY } from '../../configs';
import { Cspan } from '../../utils/components';
import Head from '../../head';

interface ExploreProps extends GatsbyPageProps { }

const Explore: React.FC<ExploreProps> = () => {
  const [warpGateOpen, setWarpGateOpen] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setWarpGateOpen(true); }, WARPGATE_ACTION_TIME);
  }, []);

  useEffect(() => {
    const goHome = (e: KeyboardEvent) => {
      if (e.which === 13) {
        e.preventDefault();

        const navigateDelay = WARPGATE_ACTION_TIME + (WARPGATES_OPEN_DELAY * 2);
        setTimeout(() => { navigate('/', { state: { docking: true } }); }, navigateDelay);
        setWarpGateOpen(false);
      }
    }

    document.addEventListener('keypress', goHome);
    return () => document.removeEventListener('keypress', goHome);
  }, []);

  return (<>
    <Head title={'Exploring Space!.'} absoluteTitle />
    <DualWarpGate open={warpGateOpen} />

    <FloatingButton
      style={{ width: '30px', height: '30px', zIndex: 10001 }}
      onClick={() => { setModalShow && setModalShow(true); }}
    >
      {'?'}
    </FloatingButton>
    <HyperdriveComponent />

    <Modal
      show={modalShow}
      opacity={.75}
      closeFunc={() => { setModalShow(false); }}
    >
      <InfoBox animate={true} style={{ textAlign: 'center', border: '1px solid dodgerblue' }}>
        <div>
          <Cspan color={'white'}>{'`arrows`.'}</Cspan><br />
        </div>
        <div>
          <Cspan color={'dodgerblue'}>To go faster in&nbsp;</Cspan>
          <Cspan color={'white'}>{'`space`'}</Cspan>
          <Cspan color={'dodgerblue'}>, push it.</Cspan><br />
        </div>
        <div>
          <Cspan color={'dodgerblue'}>to&nbsp;</Cspan>
          <Cspan color={'white'}>{'`escape`'}</Cspan>
          <Cspan color={'dodgerblue'}>, just do so.</Cspan><br />
        </div>
      </InfoBox>
    </Modal>
  </>);
}

export default Explore;
