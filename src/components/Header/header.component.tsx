import React from 'react';
import './header.style.css';
import ThemeProvider from '../ThemeProvider/themeProvider.component';


interface HeaderProps { }
 
const Header: React.FC<HeaderProps> = () => {
  return (<>
    <header className={'container'}>
      <h1 className={'header-title'}><strong>{'$> QUBITRON'}</strong></h1>
      <ThemeProvider />
    </header>
  </>);
}
 
export default Header;

