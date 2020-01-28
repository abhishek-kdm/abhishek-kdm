import React from 'react';
import './nav.style.css';


interface NavProps extends React.HTMLAttributes<HTMLElement> { }
 
const Nav: React.FC<NavProps> = (props) => {
  return <nav {...props} className={`nav${props.className ? ' ' + props.className : ''}`} />
}
 
export default Nav;
