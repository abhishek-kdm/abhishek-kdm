import React, { useEffect, useContext } from 'react';

import { ThemeContext } from 'styled-components';
import Toggler from '../__pure__/Toggler/toggler.component';
import { AppContext, IAppContext } from '../../context';


interface ThemeTogglerProps { }

const ThemeToggler: React.FC<ThemeTogglerProps> = () => {

  const { setTheme } = useContext(AppContext) as IAppContext;
  const theme = useContext(ThemeContext);

  // setting theme.
  // This method is faster than using the styled components' theming
  // due to slowness of the piece of trash, pathetic little dumbfuck
  // language called javascript.
  useEffect(() => { document.body.className = theme.name; }, [theme.name]);

  return (<>
    <div id={'theme-toggler'}>
      <Toggler onSwitch={(themeName) => { setTheme(themeName); }} />
    </div>
  </>);
}

export default ThemeToggler;
