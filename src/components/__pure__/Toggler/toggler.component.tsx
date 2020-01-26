import React, { useMemo, useRef, useEffect } from 'react';
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
  const togglerRef = useRef(null);

  const classes = useMemo(() => (
    ['toggler'].concat(active ? ['active'] : [])
  ), [active]);

  useEffect(() => {
    if (togglerRef.current != null && size != null) {
      // making this responsive based on provided size;
      // @ts-ignore
      togglerRef.current.style.setProperty('--toggler-height', `${size}px`);
    }
  }, [togglerRef, size]);

  return <span
    style={{ backgroundColor: color || 'transparent' }}
    className={classes.join(' ')}
    onClick={onToggle}
    ref={togglerRef}
  />
}
 
export default Toggler;
