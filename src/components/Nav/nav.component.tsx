import React from 'react';
import './nav.style.css';


interface NavProps extends React.HTMLAttributes<HTMLElement> { }
 
const Nav: React.FC<NavProps> = ({ className, ...rest }) => {
  const classes = ['nav'].concat(className || []);

  return <nav {...rest} className={classes.join(' ')} />
}
 
export default Nav;
