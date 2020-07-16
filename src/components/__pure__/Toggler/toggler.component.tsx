import React, { useContext, useMemo } from 'react';
import StyledToggler, { TogglerInput, TogglerLabel, SVGFill } from './toggler.style';

import { ThemeContext } from 'styled-components';
import { RACE, RACE_PROPS } from '../../../configs';


interface TogglerProps extends React.HTMLAttributes<HTMLSpanElement> {
  onSwitch: (race: Race) => void
}

const Toggler: React.FC<TogglerProps> = ({ onSwitch, ...props }) => {
  const theme = useContext(ThemeContext);

  const index = useMemo(() => Object.values(RACE).indexOf(theme.race), [theme]);

  return (<>
    <StyledToggler {...props}>
      <SVGFill viewBox='0 0 10 10' style={{
        transform: `translateX(${100 * index}%)`
      }}>
        <circle cx='5' cy='5' r='5' />
      </SVGFill>
      {Object.values(RACE).map((race) => (
        <React.Fragment key={race}>
          <TogglerInput
            onChange={() => onSwitch(race)}
            checked={race === theme.race}
            id={`switch-${race}`}
          />
          <TogglerLabel htmlFor={`switch-${race}`}>
            {RACE_PROPS[race].logo({
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
