import React, { useMemo } from 'react';
import './toggler.style.css';


interface TogglerProps {
  active?: boolean
  color?: string
  /**
   * required `height` in pixels.
   * rest would be responsive accordingly.
   */
  size?: number
  // its actually onClick
  onToggle: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}
 
const Toggler: React.SFC<TogglerProps> = ({
  active,
  color,
  size,
  onToggle
}) => {

  const classes = useMemo(() => (
    ['toggler'].concat(active ? ['active'] : [])
  ), [active]);

  return <span
    style={{ backgroundColor: color || 'transparent' }}
    className={classes.join(' ')}
    onClick={onToggle}
  />
}
 
export default Toggler;
