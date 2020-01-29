/* eslint-disable react/display-name */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './home.style.css';

import Nav from '../Nav/nav.component';
import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Warpgate from '../__pure__/Warpgate/warpgate.component';

import Social from '../Social/social.component';
import Projects from '../Projects/projects.component';


type ClickedItem = { label: string, done: boolean };

interface HomeProps { }
 
const Home: React.FC<HomeProps> = () => {
  /**
   * @note make sure that the labels aren't duplicates.
   * and that we are able to pass props to these components.
   */
  const navbarItems: NavbarItem[] = useMemo(() => [
    { label: './social', component: <Social /> },
    { label: './projects', component: <Projects /> },
  ], []);

  const [warpgateOpen, setWarpgateOpen] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<string>(navbarItems[0].label);
  const [clickedItem, setClickedItem] = useState<ClickedItem>({
    label: selectedItem,
    done: true,
  });

  const displayComponent = useMemo(() => {
    const _item = navbarItems.find((item) => item.label === selectedItem);
    if (_item != null) {
      return _item.component;
    }
    return <></>
  }, [selectedItem, navbarItems]);


  const liClassName = useCallback(({ label, done }, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(!done ? ['disabled'] : [])
      .join(' ');
  }, []);


  useEffect(() => {
    let t: any = null;
    if (!clickedItem.done) {
      setWarpgateOpen(false);
      t = setTimeout(() => { setSelectedItem(clickedItem.label); }, 500);
    }

    return () => { clearTimeout(t); };
  }, [clickedItem]);

  useEffect(() => {
    setTimeout(() => {
      setWarpgateOpen(true);
      setClickedItem((clickedItem) => ({...clickedItem, ...{ done: true }}));
    }, 150);
  }, [selectedItem]);

  return (<>
    <div id={'home'} className={'container'}>
      <Nav>
        <ul>
          {navbarItems.map(({ label }, key) => (
            <li
              key={key}
              onClick={() => {
                if (selectedItem !== label) {
                  setClickedItem({ label, done: false });
                }
              }}
              className={liClassName(clickedItem, label)}
            >
              {label}
            </li>
          ))}
        </ul>
      </Nav>
      <hr />
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
