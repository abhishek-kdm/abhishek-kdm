import React from 'react';
import './header.style.css';
import ThemeToggler from '../ThemeToggler/themeToggler.component';


interface HeaderProps { }
 
const Header: React.FC<HeaderProps> = () => {
  return (<>
    <header className={'container'}>
      <h1 className={'header-title'}><strong>{'$> QUBITRON'}</strong></h1>
      <ThemeToggler />
    </header>
  </>);
}
 
export default Header;

