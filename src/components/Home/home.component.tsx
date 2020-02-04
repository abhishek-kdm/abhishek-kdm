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
  const displayComponent = useCallback(() => {
    const item = navbarItems.find((item) => item.label === selectedItem);
    if (item != null) {
      return <item.component />;
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
    let t: any = null;
    setWarpgateOpen((state) => !clickedItem.done ? false : state);

    t = setTimeout(() => {
      setSelectedItem((state) => !clickedItem.done ? clickedItem.label : state);
    }, WARPGATE_ACTION_TIME);

    return () => { clearTimeout(t); };
  }, [clickedItem]);

  // as soon the `selectedItem` is set, we open warpgates and set 
  // cickedItem.done to `true`.
  useEffect(() => {
    const t = setTimeout(() => {
      setWarpgateOpen(true);
      setClickedItem((clickedItem) => ({...clickedItem, ...{ done: true }}));
    }, WARPGATES_OPEN_DELAY);

    return () => { clearTimeout(t); }
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
        <InfoBox scrollable style={{ width: '100%', height: '100%' }}>
          {displayComponent()}
        </InfoBox>
      </div>

    </div>
  </>);
}
 
export default Home;
