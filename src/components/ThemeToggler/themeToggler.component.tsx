import React, { useEffect, useContext } from 'react';

import Toggler from '../__pure__/Toggler/toggler.component';
import { AppContext } from '../../context';


interface ThemeTogglerProps { }
 
const ThemeToggler: React.FC<ThemeTogglerProps> = () => {

  const { theme, setTheme } = useContext(AppContext);

  // setting theme.
  useEffect(() => { document.body.className = theme; }, [theme]);

  return (<>
    <div id={'theme-provider'}>
      <Toggler onSwitch={(themeName) => { setTheme(themeName); }} />
    </div>
  </>);
}
 
export default ThemeToggler;
