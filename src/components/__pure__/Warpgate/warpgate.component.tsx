import React, { useMemo, useState, useEffect, useCallback, useContext } from 'react';
import './warpgate.style.css';

import { WARPGATE_ACTION_TIME, ORIENTATION } from '../../../configs';
import { getWarpDoor } from './WarpDoors';
import { AppContext } from '../../../context';

interface WarpgateProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation
  open?: boolean
  style?: React.CSSProperties
  onOpen?: () => void | Void
  onClose?: () => void | Void
}
 
const Warpgate: React.FC<WarpgateProps> = ({
  orientation,
  open,
  style,
  onOpen,
  onClose,
  ...rest
}) => {

  const { theme } = useContext(AppContext);

  const Style = useMemo(() => ({
    visibility: open ? 'hidden' : 'visible',
    ...(style || {})
  } as React.CSSProperties), [open, style]);
  
  const className = useMemo(() => ['warpgate'].concat(open ? ['open'] : []).join(' '), [open]);

  let orients = useMemo(() => {
    return orientation ? [orientation] : Object.values(ORIENTATION);
  }, [orientation]);

  useEffect(() => {
    let cleanups: (Void | void)[] = [];

    let t = setTimeout(() => {
      // calling `onOpen` and `onClose` on appropriate time
      // also appending their return values to the cleanup
      // functions Array.
      if (open) {
        if (onOpen != null) { cleanups.push(onOpen()); }
      } else {
        if (onClose != null) { cleanups.push(onClose()); }
      }
    }, WARPGATE_ACTION_TIME);

    return () => {
      clearTimeout(t);
      // calling all the cleanup function provided by
      // the parent of this component.
      for (const func of cleanups) { func && func(); }
    }
  }, [open, onOpen, onClose]);

  return (<>
    <div {...rest} style={Style} className={className}>
      {orients.map((orient, i1) => {
        const doors = getWarpDoor(theme, orient);
        return doors.map(({ Component, attrs }, i2) => {
          const key = `${orient}-${i1}-${i2}`;
          return <Component key={key} {...attrs} />
        });
      })}
    </div>
  </>);
}
 

interface DualWarpGateProps { open: boolean }
 
export const DualWarpGate: React.FC<DualWarpGateProps> = ({ open }) => {
  const [openV, setOpenV] = useState<boolean>(open);
  const [openH, setOpenH] = useState<boolean>(open);

  useEffect(() => {
    setOpenH((state) => open || state);
    setOpenV((state) => open && state);
  }, [open]);


  const onVerticalClose = useCallback(() => { setOpenH(false); }, [setOpenH]);
  const onHorizonatlOpen = useCallback(() => { setOpenV(true); }, [setOpenV]);

  const attrs = useCallback((orientation: Orientation) => ({
    orientation,
    open: orientation === ORIENTATION.vertical ? openV : openH,
  }), [openV, openH]);

  return (<>
    <Warpgate {...attrs('vertical')} onClose={onVerticalClose} />
    <Warpgate {...attrs('horizontal')} onOpen={onHorizonatlOpen} />
  </>);
}


export default Warpgate;

