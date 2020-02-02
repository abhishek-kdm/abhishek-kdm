import React, { useEffect, useRef } from 'react';

import Hyperdrive from './hyperdrive';

interface HyperdriveProps
  extends React.HTMLAttributes<HTMLCanvasElement> { }
 
const HyperdriveComponent: React.FC<HyperdriveProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const hyperdrive = new Hyperdrive(canvas);
      hyperdrive.init();
    }
  }, [canvasRef]);

  return <canvas {...props} id="canvas" ref={canvasRef} />;
}
 
export default HyperdriveComponent;
