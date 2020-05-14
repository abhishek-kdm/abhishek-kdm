import React, { useEffect, useContext } from 'react';

import Toggler from '../__pure__/Toggler/toggler.component';
import { AppContext, IAppContext } from '../../context';


interface ThemeTogglerProps { }
 
const ThemeToggler: React.FC<ThemeTogglerProps> = () => {

  const { theme, setTheme } = useContext(AppContext) as IAppContext;

  // setting theme.
  // This method is faster than using the  styled components' theming
  // due to slowness of javascript.
  useEffect(() => { document.body.className = theme; }, [theme]);

  return (<>
    <div id={'theme-provider'}>
      <Toggler onSwitch={(themeName) => { setTheme(themeName); }} />
    </div>
  </>);
}
 
export default ThemeToggler;
