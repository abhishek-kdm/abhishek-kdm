import React, { useContext } from 'react';
import './toggler.style.css';

import { getLogo } from '../../../utils';
import { AppContext } from '../../../context';
import { THEME } from '../../../configs';


interface TogglerProps extends React.HTMLAttributes<HTMLSpanElement> {
  onSwitch: (theme: Theme) => void
}

const Toggler: React.FC<TogglerProps> = ({ onSwitch, ...rest }) => {

  const { theme } = useContext(AppContext);

  return (<>
    <div {...rest} className={'toggler'}>
      {Object.values(THEME).map((themeName) => (<React.Fragment key={themeName}>
        <input
          onChange={() => onSwitch(themeName)}
          checked={themeName === theme}
          type='radio'
          name='theme-toggler'
          id={`switch-${themeName}`}
        /> 
        <label htmlFor={`switch-${themeName}`}>
          <svg viewBox={'0 0 100 100'} className={'progress'}>
            <circle cx={50} cy={50} r={48} strokeWidth={4} fill='none' />
          </svg>
          {getLogo(themeName)({
            style: { height: '100%' },
            color: 'var(--color-secondary)'
          })}
        </label>
      </React.Fragment>))}
    </div>
  </>)
}
 
export default Toggler;
