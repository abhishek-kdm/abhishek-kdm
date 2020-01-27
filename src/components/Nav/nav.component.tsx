import React, { useCallback } from 'react';
import './nav.style.css';


interface NavProps {
  children: (
    ulProps: () => React.HTMLAttributes<HTMLUListElement>,
    liProps: () => React.HTMLAttributes<HTMLLIElement>
    /**
     * @TODO enforce the return value to be `ul` element
     * (not JSX.Element).
     */
  ) => JSX.Element | null
}
 
const Nav: React.SFC<NavProps> = ({
  children
}) => {

  const ulProps = useCallback(() => ({ }), []);

  const liProps = useCallback(() => ({ }), []);

  return (<>
    <nav className='nav'>
      {children(ulProps, liProps)}
    </nav>
  </>);
}
 
export default Nav;
