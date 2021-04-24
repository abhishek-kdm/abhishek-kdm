import React from 'react';
import StyledInfobox, { StyledInfoboxProps } from './infobox.style';

interface InfoboxProps extends StyledInfoboxProps {}

const Infobox: React.FC<InfoboxProps> = (props) => <StyledInfobox {...props} />;

export default Infobox;
