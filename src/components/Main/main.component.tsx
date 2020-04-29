import React, { useState, useEffect, useCallback, useContext } from 'react';
import './main.style.css';

import Nav from '../Nav/nav.component';
import InfoBox from '../__pure__/InfoBox/infoBox.component';
import Warpgate from '../__pure__/Warpgate/warpgate.component';

import Statusbar from '../__pure__/Statusbar/statusbar.component';
import { WARPGATES_OPEN_DELAY } from '../../configs';
// import { withLazy } from '../../utils/components';
import { getLogo, toDataImageScheme } from '../../utils';
import { AppContext } from '../../context';


/*
 * @NOTE: remove this when `Suspense` is supported
 * and use B for `Suspense`
 */
// :A
import About from '../About/about.component';
import Social from '../Social/social.component';
import Projects from '../Projects/projects.component';

const navbarItems: NavbarItem[] = [
  { label: 'about', component: About },
  { label: 'social', component: Social },
  { label: 'projects', component: Projects },
];


/*
 * @NOTE: uncomment this for `Suspense`
 * and remove A
 */
// :B
// const About = React.lazy(() => import('../About/about.component'));
// const Social = React.lazy(() => import('../Social/social.component'));
// const Projects = React.lazy(() => import('../Projects/projects.component'));

// const navbarItems: NavbarItem[] = [
//   { label: 'about', component: withLazy(About) },
//   { label: 'social', component: withLazy(Social) },
//   { label: 'projects', component: withLazy(Projects) },
// ];


interface HomeProps { }

const Home: React.FC<HomeProps> = () => {

  const { theme } = useContext(AppContext);

  // controls open/close of the warpgaetes.
  const [warpgateOpen, setWarpgateOpen] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<string>(navbarItems[0].label);
  const [clickedItem, setClickedItem] = useState<string>(selectedItem);

  // returns the component that matches the selected item.
  const displayComponent = useCallback(() => {
    const item = navbarItems.find((item) => item.label === selectedItem);
    if (item != null) {
      return <item.component />;
    }
    return null;
  }, [selectedItem]);

  // adding `disabled` for avoiding clicks before warpgates action is completed.
  const liClassName = useCallback((label, otherLabel) => {
    return ([] as string[])
      .concat(label === otherLabel ? ['active'] : [])
      .concat(clickedItem !== selectedItem ? ['disabled'] : [])
      .join(' ');
  }, [clickedItem, selectedItem]);

  const warpGatesOnClose = useCallback(() => {
    setSelectedItem(clickedItem);
    let t = setTimeout(() => {
      setWarpgateOpen(true);
    }, WARPGATES_OPEN_DELAY);

    return () => { clearTimeout(t); };
  }, [clickedItem, setSelectedItem, setWarpgateOpen]);

  useEffect(() => { setWarpgateOpen(false); }, [clickedItem, setWarpgateOpen]);

  return (<>
    <main className={'container'}>
      <div className={'main-wrapper'}>
        <div className={'screen-wrapper'}>
          <Warpgate
            onClose={warpGatesOnClose}
            open={warpgateOpen}
            orientation={'horizontal'}
            style={{ zIndex: 5, borderRadius: '6px' }}
          />
          <div className='screen'>
            <InfoBox scrollable
              style={{
                backgroundImage: `url("${
                  // @ts-ignore
                  toDataImageScheme(getLogo(theme)({ asImage: true }))
                }")`,
              }}
            >
              {displayComponent()}
            </InfoBox>
            <Statusbar info={selectedItem} />
          </div>
        </div>
        <Nav id={'screen-navigator'}>
          <ul>
            {navbarItems.map(({ label }, key) => (
              <li
                key={key}
                onClick={() => { setClickedItem(label); }}
                className={liClassName(clickedItem, label)}
              >
                {label}
                <svg className={'dash'} viewBox={'0 0 40 1'}>
                  <path d={'M0 1 H40'}></path>
                </svg>
              </li>
            ))}
          </ul>
        </Nav>
      </div>
    </main>
  </>);
}

export default Home;
