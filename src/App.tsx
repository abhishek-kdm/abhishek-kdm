import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/header.component';
import Home from './components/Home/home.component';
import Footer from './components/Footer/footer.component';

import { AppContext } from './context';
import ThemeProvider from './components/ThemeProvider/themeProvider.component';
import FloatingButton from './components/__pure__/FloatingButton/floatingButton.component';


const App: React.FC = () => {
  const [title, setTitle] = useState<string>('Home | Abhishek Kadam');

  // setting title on page load or title change.
  useEffect(() => { document.title = title; }, [title]);

  return (
    <AppContext.Provider value={{ setTitle }}>
      <div id={'wrapper'}>
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
