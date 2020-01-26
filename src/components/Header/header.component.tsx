import React from 'react';
import './header.style.css';


interface HeaderProps { }
 
const Header: React.SFC<HeaderProps> = () => {
  return (<>
    <header className={'container'}>
      <h1>{`< QUBITRON />`}</h1>
    </header>
  </>);
}
 
export default Header;

