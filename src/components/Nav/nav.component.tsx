import React from 'react';
import StyledNav from './nav.style';


interface NavProps extends React.HTMLAttributes<HTMLElement> { }
 
const Nav: React.FC<NavProps> = (props) => <StyledNav {...props} />;
 
export default Nav;
