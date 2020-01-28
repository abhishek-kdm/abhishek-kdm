import React from 'react';
import './header.style.css';


interface HeaderProps { }
 
const Header: React.FC<HeaderProps> = () => {
  return (<>
    <header className={'container'}>
      <h1><b>{'$> QUBITRON'}</b></h1>
    </header>
  </>);
}
 
export default Header;

