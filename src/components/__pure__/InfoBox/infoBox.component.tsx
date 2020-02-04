import React, { useMemo } from 'react';
import './infoBox.style.css';


interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * need to have `height` attr for scrollable.
   */
  scrollable?: boolean
  animate?: boolean
}
 
const InfoBox: React.FC<InfoBoxProps> = ({
  scrollable,
  animate = false,
  style,
  className,
  ...rest
}) => {
  const scrollableStyle: any = {};
  if (scrollable) {
    scrollableStyle['overflow'] = 'hidden';
    scrollableStyle['overflowY'] = 'auto';
  }

  const classes = useMemo(() => ['info-box']
    .concat(animate ? ['vintage'] : [])
    .concat(className ? [className.trim()] : [])
  , [animate, className]);

  const _style = useMemo(() => ({
    width: 'auto', height: 'auto',
    ...style,
    ...scrollableStyle,
    animation: animate ? '.7s ease-out 0s 1 vintage-display' : '',
  }), [style, animate, scrollableStyle]);

  return <div {...rest} className={classes.join(' ')} style={_style} />;
}
 
export default InfoBox;
