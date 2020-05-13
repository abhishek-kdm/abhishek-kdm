import React, { useMemo } from 'react';
import StyledInfoBox, { StyledInfoBoxProps } from './infoBox.style';


export interface InfoBoxProps
  extends StyledInfoBoxProps, React.HTMLAttributes<HTMLDivElement> { }
 
const InfoBox: React.FC<InfoBoxProps> = (props) => <StyledInfoBox {...props} />;
 
export default InfoBox;
