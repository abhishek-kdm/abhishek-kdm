import React, { useMemo, useState, useEffect } from 'react';
import './warpgate.style.css';
import { WARPGATES_OPEN_DELAY } from '../../../configs';


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
 

interface DualWarpGateProps { open: boolean }
 
export const DualWarpGate: React.FC<DualWarpGateProps> = ({ open }) => {
  const [warp_v, setWarp_v] = useState<boolean>(open);
  const [warp_h, setWarp_h] = useState<boolean>(open);

  useEffect(() => {
    switch (open) {
      case true:
        setWarp_h(open);
        setTimeout(() => { setWarp_v(open); }, WARPGATES_OPEN_DELAY);
        break;
    
      default:
        setWarp_v(open);
        setTimeout(() => { setWarp_h(open); }, WARPGATES_OPEN_DELAY);
        break;
    }
  }, [open]);


  return (<>
    <Warpgate open={warp_v} orientation={'vertical'} />
    <Warpgate open={warp_h} orientation={'horizontal'} />
  </>);
}
 

export default Warpgate;

