import React, { useEffect, useMemo, useContext } from 'react';

import { THEME } from '../../configs';
import Toggler from '../__pure__/Toggler/toggler.component';
import { AppContext } from '../../context';


interface ThemeTogglerProps { }
 
const ThemeToggler: React.FC<ThemeTogglerProps> = () => {

  const { theme, setTheme } = useContext(AppContext);

  const togglerActive = useMemo(() => theme === THEME.light, [theme]);

  // setting theme.
  useEffect(() => { document.body.className = theme; }, [theme]);

  return (<>
    <div id={'theme-provider'}>
      <Toggler
        active={togglerActive}
        size={10}
        style={{ backgroundColor: 'var(--color-primary)' }}
        onToggle={() => {
          togglerActive ? setTheme(THEME.dark) : setTheme(THEME.light)
        }}
      />
    </div>
  </>);
}
 
export default ThemeToggler;
