import React, { useEffect, useState } from 'react';
import './App.css';

import { AppContext } from './context';
import { WARPSTATE, GITHUB, THEME } from './configs';

import SpaceExplorer from './components/SpaceExplorer/spaceExplorer.component';

import FloatButton from './components/__pure__/FloatingButton/floatingButton.component';
import { fetchJson } from './utils';
import Modal from './components/__pure__/Modal/modal.component';
import InfoBox from './components/__pure__/InfoBox/infoBox.component';


const App: React.FC = () => {
  const [title, setTitle] = useState<string>('Home | Abhishek Kadam');
  const [warpState, setWarpState] = useState<WarpState>(WARPSTATE.warpin);
  const [theme, setTheme] = useState<Theme>(THEME.dark);

  // github links and info etc.
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  const [modalShow, setModalShow] = useState<boolean>(false);

  useEffect(() => {
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.which === 27) { // escape
        if (warpState === WARPSTATE.explore) {
          setWarpState(WARPSTATE.warpin);
        }
      }
    }
    document.addEventListener('keydown', escapeHandler);
    return () => { document.removeEventListener('keydown', escapeHandler); }
  }, [warpState]);

  // setting title on page load or title change.
  useEffect(() => { document.title = title; }, [title]);

  useEffect(() => {
    fetchJson(GITHUB.user_url)
      .then((_user) => { setUser(_user); });
  }, []);

  useEffect(() => {
    if (user != null) {
      fetchJson(user.repos_url)
        .then((repos) => { setRepos(repos); });
    }
  }, [user]);


  return (
    <AppContext.Provider value={{
      theme,
      setTheme,
      setModalShow,
      user,
      repos,
      setTitle
    }}>
      <div id={'wrapper'}>
        <SpaceExplorer warpState={warpState} /> 

        <FloatButton
          style={{ width: '75px', height: '75px' }}
          onClick={() => { setWarpState(WARPSTATE.explore) }}
        >
          {'eject'}
        </FloatButton>

        <Modal
          show={modalShow}
          closeFunc={() => { setModalShow(false); }}
        >
          <InfoBox animate={true} style={{ textAlign: 'center' }}>
            <p>
            <span>{'Navigate with '}</span>
            <span style={{ color: 'white' }}>{'`arrows`.'}</span><br />
            </p>

            <p>
            <span>{'To go faster in '}</span>
            <span style={{ color: 'white' }}>{'`space`'}</span>
            <span>{', push it.'}</span><br />
            </p>

            <p>
            <span>{'to '}</span>
            <span style={{ color: 'white' }}>{'`escape`'}</span>
            <span>{', just do so.'}</span><br />
            </p>
          </InfoBox>
        </Modal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
