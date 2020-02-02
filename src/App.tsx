import React, { useEffect, useState } from 'react';
import './App.css';

import { AppContext } from './context';
import { WARPSTATE } from './configs';

import SpaceExplorer from './components/SpaceExplorer/spaceExplorer.component';

import FloatButton from './components/__pure__/FloatingButton/floatingButton.component';


const App: React.FC = () => {
  const [title, setTitle] = useState<string>('Home | Abhishek Kadam');
  const [warpState, setWarpState] = useState<WarpState>(WARPSTATE.warpin);

  useEffect(() => {
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.which === 27) { // escape
        if (warpState === WARPSTATE.explore) {
          setWarpState(WARPSTATE.warpin);
        }
      }
    }
    document.addEventListener('keydown', escapeHandler);

    return () => {
      document.removeEventListener('keydown', escapeHandler);
    }
  }, [warpState]);


  // setting title on page load or title change.
  useEffect(() => { document.title = title; }, [title]);


  return (
    <AppContext.Provider value={{ setTitle }}>
      <div id={'wrapper'}>
        <SpaceExplorer warpState={warpState} /> 

        <FloatButton onClick={() => { setWarpState(WARPSTATE.explore) }}>
          {'Explore'}
          {'Space'}
        </FloatButton>
      </div>
    </AppContext.Provider>
  );
}

export default App;
