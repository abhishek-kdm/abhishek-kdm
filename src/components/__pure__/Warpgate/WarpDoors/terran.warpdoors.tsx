import React, { useRef, useMemo } from 'react';

import { useEllipseCircularRadius, borderColor, MetallicLinearGradient } from './utils';
// eslint-disable-next-line no-unused-vars
import { WarpDoorProps } from '.';

export const HorizontalDoor: React.FC<WarpDoorProps> = ({ position = 'left' }) => {
  const warpGate = useRef<SVGSVGElement>(null);
  const radii = useEllipseCircularRadius(warpGate);

  const transform = useMemo(() => (
    position === 'right' ? 'rotate(180)' : undefined
  ), [position]);

  return (<>
    <div className={`warpdoor ${position}`}>
      <svg transform={transform} preserveAspectRatio='none' viewBox='0 0 200 200' ref={warpGate}>
        <g fill='none'>
          <polygon points='12.9,200 12.19,200 30.39,200 31.1,200' />
          <polygon points='0,200 0,193.1 0,174.9 0,155.1 0,136.9 0,117.1 0,98.9 0,79.1 0,60.9 0,41.1 0,22.9 0,2.1 0,0
            -0.07,0 -0.07,200 0,200' />
          <polygon points='88.9,200 88.19,200 106.39,200 107.1,200' />
          <polygon points='50.9,200 50.19,200 68.39,200 69.1,200' />
          <polygon points='126.9,200 126.19,200 144.39,200 145.1,200' />
          <polygon points='164.9,200 164.19,200 182.39,200 183.1,200' />
        </g>
        <g fill='#FFFF00'>
          <polygon points='1.39,0 0,0 0,2.1' />
          <polygon points='107.1,200 188.81,118.29 177.89,111.01 88.9,200' />
          <polygon points='0,41.1 39.41,0 21.22,0 0,22.9' />
          <polygon points='31.1,200 143.21,87.89 132.29,80.61 12.9,200' />
          <polygon points='0,193.1 124.93,67.52 124.93,49.25 0,174.9' />
          <polygon points='183.1,200 199.93,183.17 199.93,164.97 164.9,200' />
          <polygon points='0,79.1 77.4,0 59.2,0 0,60.9' />
          <polygon points='145.1,200 199.93,145.17 199.93,126.97 126.9,200' />
          <polygon points='0,155.1 124.93,29.36 124.93,11.05 0,136.9' />
          <polygon points='69.1,200 166.01,103.09 155.09,95.81 50.9,200' />
          <polygon points='0,117.1 115.4,0 97.2,0 0,98.9' />
        </g>
        <polygon points='0,22.9 21.22,0 1.39,0 0,2.1' />
        <polygon points='0,60.9 59.2,0 39.41,0 0,41.1' />
        <polygon points='0,98.9 97.2,0 77.4,0 0,79.1' />
        <polygon points='0,136.9 124.93,11.05 124.93,0 115.4,0 0,117.1' />
        <polygon points='0,174.9 124.93,49.25 124.93,29.36 0,155.1' />
        <polygon points='0,200 0,200 12.19,200 12.9,200 132.29,80.61 124.93,75 124.93,67.52 0,193.1' />
        <polygon points='30.39,200 50.19,200 50.9,200 155.09,95.81 143.21,87.89 31.1,200' />
        <polygon points='68.39,200 88.19,200 88.9,200 177.89,111.01 166.01,103.09 69.1,200' />
        <polygon points='106.39,200 126.19,200 126.9,200 199.93,126.97 199.93,125 188.81,118.29 107.1,200' />
        <polygon points='144.39,200 164.19,200 164.9,200 199.93,164.97 199.93,145.17 145.1,200' />
        <polygon points='182.39,200 199.93,200 199.93,183.17 183.1,200' />
        <polygon fill='url(#terran-metallic-horizontal)' points='123,3 3,3 3,197 197,197 197,127 123,77' />


        <line stroke={borderColor} strokeWidth={1} x1={3} y1={77} x2={123} y2={77} />
        <line stroke={borderColor} strokeWidth={1} x1={123} y1={77} x2={123} y2={197} />

        {/* nails */}
        <g fill='url(#terran-metallic-horizontal)' stroke={borderColor}>

          <ellipse {...radii} cx={8} cy={8} />
          <ellipse {...radii} cx={118} cy={8} />
          <ellipse {...radii} cx={192} cy={191} />
          <ellipse {...radii} cx={192} cy={132} />
          <ellipse {...radii} cx={8} cy={192} />

          <ellipse {...radii} cx={8} cy={82} />
          <ellipse {...radii} cx={118} cy={82} />

          <ellipse {...radii} cx={8} cy={72} />
          <ellipse {...radii} cx={118} cy={72} />

          <ellipse {...radii} cx={118} cy={192} />
          <ellipse {...radii} cx={127} cy={87} />

          <ellipse {...radii} cx={127} cy={192} />
        </g>
      </svg>
    </div>
  </>);
}


export const VerticalDoor: React.FC<WarpDoorProps> = ({ position = 'top' }) => {
  const warpGate = useRef<SVGSVGElement>(null);
  const radii = useEllipseCircularRadius(warpGate);

  const transform = useMemo(() => (
    position === 'bottom' ? 'rotate(180)' : undefined
  ), [position]);

  return (<>
    <div className={`warpdoor ${position}`}>
      <svg transform={transform} preserveAspectRatio='none' viewBox='0 0 200 200' ref={warpGate}>
        <g fill='none'>
          <polygon points='0 12.97 0 12.26 0 30.46 0 31.17 0 12.97' />
          <polygon points='0 0 7.61 0 25.81 0 45.61 0 63.81 0 83.61 0 101.81 0 121.61 0 139.81 0 159.61 0 177.81 0 198.61 0 200 0 200 0 0 0 0 0 0 0' />
          <polygon points='0 88.97 0 88.26 0 106.46 0 107.17 0 88.97' />
          <polygon points='0 50.97 0 50.26 0 68.46 0 69.17 0 50.97' />
          <polygon points='0 126.97 0 126.26 0 144.46 0 145.17 0 126.97' />
          <polygon points='0 164.97 0 164.26 0 182.46 0 183.17 0 164.97' />
        </g>
        <g fill='#FFFF00'>
          <polygon points='200 1.46 200 0 198.61 0 200 1.46' />
          <polygon points='0 107.17 82.42 188.88 89.7 177.96 0 88.97 0 107.17' />
          <polygon points='159.61 0 200 39.48 200 21.29 177.81 0 159.61 0' />
          <polygon points='0 31.17 112.82 143.28 120.1 132.35 0 12.97 0 31.17' />
          <polygon points='7.61 0 133.19 125 151.46 125 25.81 0 7.61 0' />
          <polygon points='0 183.17 17.54 200 35.74 200 0 164.97 0 183.17' />
          <polygon points='121.61 0 200 77.47 200 59.27 139.81 0 121.61 0' />
          <polygon points='0 145.17 55.54 200 73.74 200 0 126.97 0 145.17' />
          <polygon points='45.61 0 171.35 125 189.66 125 63.81 0 45.61 0' />
          <polygon points='0 69.17 97.62 166.08 104.9 155.16 0 50.97 0 69.17' />
          <polygon points='83.61 0 200 115.47 200 97.27 101.81 0 83.61 0' />
        </g>
        <polygon points='177.81 0 200 21.29 200 1.46 198.61 0 177.81 0' />
        <polygon points='139.81 0 200 59.27 200 39.48 159.61 0 139.81 0' />
        <polygon points='101.81 0 200 97.27 200 77.47 121.61 0 101.81 0' />
        <polygon points='63.81 0 189.66 125 200 125 200 115.47 83.61 0 63.81 0' />
        <polygon points='25.81 0 151.46 125 171.35 125 45.61 0 25.81 0' />
        <polygon points='0 0 0 0 0 12.26 0 12.97 120.1 132.35 125 125 133.19 125 7.61 0 0 0' />
        <polygon points='0 30.46 0 50.26 0 50.97 104.9 155.16 112.82 143.28 0 31.17 0 30.46' />
        <polygon points='0 68.46 0 88.26 0 88.97 89.7 177.96 97.62 166.08 0 69.17 0 68.46' />
        <polygon points='0 106.46 0 126.26 0 126.97 73.74 200 75 200 82.42 188.88 0 107.17 0 106.46' />
        <polygon points='0 144.46 0 164.26 0 164.97 35.74 200 55.54 200 0 145.17 0 144.46' />
        <polygon points='0 182.46 0 200 17.54 200 0 183.17 0 182.46' />
        <polygon fill='url(#terran-metallic-vertical)' points='197,123 197,3 3,3 3,197 73,197 123,123' />


        <line stroke={borderColor} strokeWidth={1} x1={3} y1={123} x2={123} y2={123} />
        <line stroke={borderColor} strokeWidth={1} x1={123} y1={3} x2={123} y2={123} />

        {/* nails */}
        <g fill='url(#terran-metallic-horizontal)' stroke={borderColor}>

          <ellipse {...radii} cx={8} cy={8} />
          <ellipse {...radii} cx={118} cy={8} />
          <ellipse {...radii} cx={192} cy={8} />
          <ellipse {...radii} cx={192} cy={118} />
          <ellipse {...radii} cx={8} cy={192} />

          <ellipse {...radii} cx={8} cy={118} />
          <ellipse {...radii} cx={118} cy={118} />

          <ellipse {...radii} cx={8} cy={128} />
          <ellipse {...radii} cx={128} cy={8} />

          <ellipse {...radii} cx={128} cy={118} />
          <ellipse {...radii} cx={68} cy={192} />

          <ellipse {...radii} cx={113} cy={127} />
        </g>

      </svg>
    </div>
  </>);
}

const WarpDoorSVGDefs: React.FC = () => (<>
  <MetallicLinearGradient id={'terran-metallic-horizontal'} gradientTransform='rotate(20)' />
  <MetallicLinearGradient id={'terran-metallic-vertical'} gradientTransform='rotate(20)' />
</>);

export default WarpDoorSVGDefs;
