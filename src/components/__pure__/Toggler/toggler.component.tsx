import React, { useContext } from 'react';
import StyledToggler, { TogglerInput, TogglerLabel, SVGActive } from './toggler.style';

import { getLogo } from '../../../utils';
import { AppContext } from '../../../context';
import { THEME } from '../../../configs';


interface TogglerProps extends React.HTMLAttributes<HTMLSpanElement> {
  onSwitch: (theme: Theme) => void
}

const Toggler: React.FC<TogglerProps> = ({ onSwitch, ...props }) => {
  const { theme } = useContext(AppContext);

  return (<>
    <StyledToggler {...props}>
      {Object.values(THEME).map((themeName) => (<React.Fragment key={themeName}>
        <TogglerInput
          onChange={() => onSwitch(themeName)}
          checked={themeName === theme}
          id={`switch-${themeName}`}
        /> 
        <TogglerLabel htmlFor={`switch-${themeName}`}>
          <SVGActive viewBox={'0 0 100 100'} active={themeName === theme}>
            <circle cx={50} cy={50} r={48} strokeWidth={4} fill='none' />
          </SVGActive>
          {getLogo(themeName)({
            style: { height: '100%' },
            color: 'var(--color-secondary)'
          })}
        </TogglerLabel>
      </React.Fragment>))}
    </StyledToggler>
  </>)
}
 
export default Toggler;
