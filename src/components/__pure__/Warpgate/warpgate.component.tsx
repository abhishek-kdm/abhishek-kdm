import React, { useMemo } from 'react';
import './warpgate.style.css';


interface WarpgateProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation
  open?: boolean
  style?: React.CSSProperties
}
 
const Warpgate: React.FC<WarpgateProps> = ({
  orientation,
  open,
  style,
  ...rest
}) => {

  const _style = useMemo(() => ({
    visibility: open ? 'hidden' : 'visible',
    ...(style || {})
  } as React.CSSProperties), [open, style]);
  
  const className = useMemo(() => ['warpgate'].concat(open ? ['open'] : []).join(' '), [open]);

  let doors = useMemo(() => {
    switch (orientation) {
      case 'horizontal': return ['left', 'right'];
      case 'vertical': return ['top', 'bottom'];
      default: return ['left', 'right', 'top', 'bottom'];
    }
  }, [orientation]);

  return (<>
    <div
      {...rest}
      style={_style}
      className={className}
    >
      {doors.map((door) => (
        <div key={door} className={`door ${door}`}>
          <div className='screw one'></div>
          <div className='screw two'></div>
          <div className='screw three'></div>
          <div className='screw four'></div>
          <div className='screw five'></div>
        </div>
      ))}
    </div>
  </>);
}
 
export default Warpgate;

