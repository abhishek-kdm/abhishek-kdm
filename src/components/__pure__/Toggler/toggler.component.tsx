import React, { useContext } from 'react';
import StyledToggler, { TogglerInput, TogglerLabel, SVGActive, SVGFill } from './toggler.style';

import { ThemeContext } from 'styled-components';
import { AppContext, IAppContext } from '../../../context';
import { THEME, THEME_PROPS } from '../../../configs';


interface TogglerProps extends React.HTMLAttributes<HTMLSpanElement> {
  onSwitch: (theme: Theme) => void
}

const Toggler: React.FC<TogglerProps> = ({ onSwitch, ...props }) => {
  const theme = useContext(ThemeContext);

  const index = Object.values(THEME).indexOf(theme.name);

  return (<>
    <StyledToggler {...props}>
      <SVGFill viewBox='0 0 10 10' style={{
        transform: `translateX(${100 * index}%)`
      }}>
        <circle cx='5' cy='5' r='5' />
      </SVGFill>
      {Object.values(THEME).map((themeName) => (
        <React.Fragment key={themeName}>
          <TogglerInput
            onChange={() => onSwitch(themeName)}
            checked={themeName === theme.name}
            id={`switch-${themeName}`}
          />
          <TogglerLabel htmlFor={`switch-${themeName}`}>
            {/*
            <SVGActive viewBox={'0 0 100 100'} active={themeName === theme}>
              <circle cx={50} cy={50} r={48} strokeWidth={4} fill='none' />
            </SVGActive>
              */}
            {THEME_PROPS[themeName].logo({
              style: { height: '100%' },
              color: 'var(--color-secondary)'
            })}
          </TogglerLabel>
        </React.Fragment>))
      }
    </StyledToggler>
  </>)
}

export default Toggler;
