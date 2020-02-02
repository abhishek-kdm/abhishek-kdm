/* eslint-disable react/display-name */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './home.style.css';

import Nav from '../Nav/nav.component';
import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Warpgate from '../__pure__/Warpgate/warpgate.component';

import Social from '../Social/social.component';
import Projects from '../Projects/projects.component';
import { WARPGATE_ACTION_TIME, WARPGATES_OPEN_DELAY } from '../../configs';


type ClickedItem = { label: string, done: boolean };

interface HomeProps { }
 
const Home: React.FC<HomeProps> = () => {
  /**
   * @note make sure that the labels aren't duplicates.
   * and that we are able to pass props to these components.
   */
  const navbarItems: NavbarItem[] = useMemo(() => [
    { label: './social', component: Social },
    { label: './projects', component: Projects },
  ], []);

  // controls open/close of the warpgaetes.
  const [warpgateOpen, setWarpgateOpen] = useState<boolean>(true);

  // selected item name as string.
  // changes after clickedItem does (after some delay
  // for warpgates to do their action).
  // this string decides which component to show on the infobox.
  const [selectedItem, setSelectedItem] = useState<string>(navbarItems[0].label);

  // clicked button in the navigation bar.
  const [clickedItem, setClickedItem] = useState<ClickedItem>({
    label: selectedItem,
    done: true,
  });

  // returns the component that matches the selected item.
  const displayComponent = useMemo(() => {
    const _item = navbarItems.find((item) => item.label === selectedItem);
    if (_item != null) {
      return _item.component;
    }
    return <></>
  }, [selectedItem, navbarItems]);

  // adding `disabled` for avoiding clicks before warpgates action is completed.
  const liClassName = useCallback(({ label, done }, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(!done ? ['disabled'] : [])
      .join(' ');
  }, []);


  // as any nav button is clicked, clickedItem is set to its
  // corresponding label value, and the selected item is set after a 
  // delay for the warpgate action.
  useEffect(() => {
    let __timeout__: any = null;
    if (!clickedItem.done) {
      setWarpgateOpen(false);

      __timeout__ = setTimeout(() => {
        setSelectedItem(clickedItem.label);
      }, WARPGATE_ACTION_TIME);
    }

    return () => { clearTimeout(__timeout__); };
  }, [clickedItem]);

  // as soon the `selectedItem` is set, we open warpgates and set 
  // cickedItem.done to `true`.
  useEffect(() => {
    setTimeout(() => {
      setWarpgateOpen(true);
      setClickedItem((clickedItem) => ({...clickedItem, ...{ done: true }}));
    }, WARPGATES_OPEN_DELAY);
  }, [selectedItem]);

  return (<>
    <div id={'home'} className={'container'}>
      <Nav>
        <ul>
          {navbarItems.map(({ label }, key) => (
            <li
              key={key}
              onClick={() => {
                selectedItem !== label && setClickedItem({ label, done: false });
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
          {displayComponent()}
        </InfoBox>
      </div>

    </div>
  </>);
}
 
export default Home;
