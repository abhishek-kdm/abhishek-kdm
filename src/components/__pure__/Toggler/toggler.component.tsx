import React, { useMemo } from 'react';
import './toggler.style.css';


interface TogglerProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean
  /**
   * required `height` in pixels.
   * rest would be responsive accordingly.
   */
  size?: number
  // its actually onClick
  onToggle: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}
 
const Toggler: React.FC<TogglerProps> = ({
  active,
  onToggle,
  className,
  ...rest
}) => {

  const _class = className || '';

  const classes = useMemo(() => (['toggler']
    .concat(active ? ['active'] : [])
    .concat(_class.trim().length > 0 ? [_class.trim()] : [])
  ), [active, _class]);

  return <span
    {...rest}
    className={classes.join(' ')}
    onClick={onToggle}
  />
}
 
export default Toggler;
