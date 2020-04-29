import React from 'react';


interface GlobalSVGFiltersProps { }

const GlobalSVGFilters: React.FC<GlobalSVGFiltersProps> = () => (<>
  <filter id='glow'>
    <feGaussianBlur stdDeviation='2.5' result='coloredBlur' />
    <feMerge>
      <feMergeNode in='coloredBlur' />
      <feMergeNode in='SourceGraphic' />
    </feMerge>
  </filter>
</>);

export default GlobalSVGFilters;
