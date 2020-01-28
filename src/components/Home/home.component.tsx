/* eslint-disable react/display-name */
import React, { useState, useMemo } from 'react';
import './home.style.css';

import Nav from '../Nav/nav.component';
import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Warpgate from '../__pure__/Warpgate/warpgate.component';

import Social from '../Social/social.component';

interface HomeProps { }
 
const Home: React.FC<HomeProps> = () => {
  const [warpgateOpen, setWarpgateOpen] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  /**
   * @note make sure that the labels aren't duplicates.
   */
  const navbarItems: NavbarItem[] = useMemo(() => [
    { label: 'nasd', component: <Social /> },
    { label: '12nasd', component: <>{'aldjba;skjbdas'}</> },
    { label: '2olna', component: <>{'osgflnfkjbldf'}</> },
    { label: 'oaljaf', component: <>{'iyhqwnaskjb'}</> },
  ], []);

  const displayComponent = useMemo(() => {
    const _item = navbarItems.find((item) => item.label === selectedItem);
    if (_item != null) {
      return _item.component;
    }
    return <></>
  }, [selectedItem, navbarItems]);

  return (<>
    <div id={'home'} className={'container'}>
      <Nav>
        <ul>
          {navbarItems.map((item, key) => (
            <li
              key={key}
              onClick={() => { setSelectedItem(item.label) }}
              className={selectedItem === item.label ? 'active' : ''}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Nav>

      <br /><br />

      <div
        style={{
          width: '100%',
          height: '50vh',
          position: 'relative',
        }}
      >
        <Warpgate
          open={warpgateOpen}
          orientation={'horizontal'}
          style={{ zIndex: 5, borderRadius: '6px' }}
        />
        <InfoBox scrollable width={'100%'} height={'100%'}>
          {displayComponent}
        </InfoBox>
      </div>

    </div>
  </>);
}
 
export default Home;
