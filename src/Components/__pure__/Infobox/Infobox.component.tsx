import React from 'react';
import StyledInfobox, {
    StyledInfoboxProps,
    InfoboxElement,
} from './Infobox.style';

const Infobox: React.ForwardRefRenderFunction<HTMLElement, StyledInfoboxProps> =
    (props, ref) => <StyledInfobox {...props} ref={ref} />;

export default React.forwardRef<InfoboxElement, StyledInfoboxProps>(Infobox);
