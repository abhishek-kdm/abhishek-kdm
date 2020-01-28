import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/header.component';
import Home from './components/Home/home.component';
import Footer from './components/Footer/footer.component';

import { AppContext } from './context';
import ThemeProvider from './components/ThemeProvider/themeProvider.component';
import FloatingButton from './components/__pure__/FloatingButton/floatingButton.component';
import Warpgate from './components/__pure__/Warpgate/warpgate.component';


const App: React.FC = () => {
  const [title, setTitle] = useState<string>('Home | Abhishek Kadam');
  const [warped_v, setWarped_v] = useState<boolean>(false);
  const [warped_h, setWarped_h] = useState<boolean>(false);

  // setting title on page load or title change.
  useEffect(() => { document.title = title; }, [title]);

  useEffect(() => {
    setTimeout(() => { setWarped_h(true); }, 1000);
  }, []);
  useEffect(() => {
    if (warped_h) {
      setTimeout(() => { setWarped_v(true); }, 300);
    }
  }, [warped_h]);

  return (
    <AppContext.Provider value={{ setTitle }}>
      <div id={'wrapper'}>
        <Warpgate open={warped_v} orientation={'vertical'} />
        <Warpgate open={warped_h} orientation={'horizontal'} />
        <ThemeProvider />
        <Header />
        <Home />
        <FloatingButton>{'Github'}</FloatingButton>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
