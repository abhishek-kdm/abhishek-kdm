import React, { useState, useEffect, useMemo } from 'react';
import './themeProvider.style.css';

import { THEME } from '../../constants';
import Toggler from '../__pure__/Toggler/toggler.component';


interface ThemeProviderProps { }
 
const ThemeProvider: React.SFC<ThemeProviderProps> = () => {
  const [theme, setTheme] = useState<Theme>(THEME.dark);

  const togglerActive = useMemo(() => theme === THEME.light, [theme]);

  // setting theme.
  useEffect(() => { document.body.className = theme; }, [theme]);

  return (<>
    <div id={'theme-provider'}>
      <Toggler
        active={togglerActive}
        size={20}
        color={togglerActive ? 'tomato' : '#26c281'}
        onToggle={() => {
          togglerActive ? setTheme(THEME.dark) : setTheme(THEME.light)
        }}
      />
    </div>
  </>);
}
 
export default ThemeProvider;
