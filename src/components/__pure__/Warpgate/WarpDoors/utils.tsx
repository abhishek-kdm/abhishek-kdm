import React, { useState, useMemo, useEffect } from 'react';

export const borderColor = '#111111';

export const useEllipseCircularRadius = (svgRef: React.RefObject<SVGSVGElement>) => {
  const [nailSize, setNailSize] = useState(1);
  const [ratio, setRatio] = useState(1);

  const radii = useMemo(() => ({
    rx: ratio > 1 ? nailSize : nailSize * (1 / ratio),
    ry: ratio < 1 ? nailSize : nailSize * ratio,
  }), [ratio, nailSize]);

  useEffect(() => {
    if (svgRef.current) {
      const { offsetWidth, offsetHeight } = svgRef.current.parentNode as HTMLElement;
      setRatio(offsetWidth / offsetHeight);

      // size `1` nail almost invisible on smaller screens.
      if (offsetWidth <= 576) { setNailSize(1.5); }
    }
  }, [svgRef]);

  return radii;
}


export interface MetallicLinearGradientProps
  extends React.SVGProps<SVGLinearGradientElement> { }
 
export const MetallicLinearGradient: React.SFC<MetallicLinearGradientProps> = (props) => {
  return (<>
    <linearGradient {...props}>
      <stop offset='0%' stopColor='#131313' />
      <stop offset='15%' stopColor='#232323' />
      <stop offset='22%' stopColor='#2A2A2A' />
      <stop offset='30%' stopColor='#212121' />

      <stop offset='35%' stopColor='#232323' />
      <stop offset='50%' stopColor='#404040' />
      <stop offset='65%' stopColor='#212121' />

      <stop offset='85%' stopColor='#232323' />
      <stop offset='92%' stopColor='#2A2A2A' />
      <stop offset='100%' stopColor='#131313' />
    </linearGradient>
  </>);
}

