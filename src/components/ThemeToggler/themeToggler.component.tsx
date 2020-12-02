import React, { useEffect, useContext } from 'react';
import StyledThemeToggler from './themeToggler.style';

import { ThemeContext } from 'styled-components';
import Toggler from '../__pure__/Toggler/toggler.component';
import { AppContext } from '../../context';

interface ThemeTogglerProps { }

const ThemeToggler: React.FC<ThemeTogglerProps> = () => {

  const { setRace } = useContext(AppContext);
  const theme = useContext(ThemeContext);

  // setting theme.
  // This method is faster than using the styled components' theming
  // due to slowness of the piece of trash, pathetic little dumbfuck
  // language called javascript.
  useEffect(() => { document.body.className = theme.race; }, [theme.race]);

  return (<>
    <StyledThemeToggler id={'theme-toggler'}>
      <Toggler onSwitch={(themeName) => { setRace && setRace(themeName); }} />
    </StyledThemeToggler>
  </>);
}

export default ThemeToggler;
