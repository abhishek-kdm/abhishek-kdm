import React from 'react';
import './infoBox.style.css';


interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  /**
   * need to have `height` attr for scrollable.
   */
  scrollable?: boolean
}
 
const InfoBox: React.FC<InfoBoxProps> = ({
  width,
  height,
  scrollable,
  ...rest
}) => {
  const scrollableStyle: any = {};
  if (scrollable) {
    scrollableStyle['overflow'] = 'hidden';
    scrollableStyle['overflowY'] = 'auto';
  }

  width = width || 'auto';
  height = height || 'auto';

  const style = { width, height, ...scrollableStyle  };

  return <div {...rest} className='info-box' style={style} />;
}
 
export default InfoBox;
