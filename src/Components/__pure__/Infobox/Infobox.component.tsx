import React from 'react';
import StyledInfobox, {
  StyledInfoboxProps,
  InfoboxElement,
} from './Infobox.style';

const Infobox = React.forwardRef<InfoboxElement, StyledInfoboxProps>(
  (props, ref) => <StyledInfobox {...props} ref={ref} />
);

export default Infobox;
