import React, { useEffect, useRef, useContext } from 'react';

import Hyperdrive from './hyperdrive';
import FloatButton from '../FloatingButton/floatingButton.component';
import { AppContext } from '../../../context';


interface HyperdriveProps
  extends React.HTMLAttributes<HTMLCanvasElement> { }

const HyperdriveComponent: React.FC<HyperdriveProps> = (props) => {
  const { setModalShow } = useContext(AppContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const hyperdrive = new Hyperdrive(canvas);
      hyperdrive.init();
    }
  }, [canvasRef]);

  return (<>
    <FloatButton
      style={{ width: '30px', height: '30px', zIndex: 10001 }}
      onClick={() => { setModalShow(true); }}
    >
      {'?'}
    </FloatButton>
    <canvas {...props} id="canvas" ref={canvasRef} />
  </>);
}
 
export default HyperdriveComponent;
