import React from 'react';
import StyledNoSignal, { NoSignalLabel } from './noSignal.style';

interface NoSignalProps {
  label?: string
}

const NoSignal: React.FC<NoSignalProps> = ({ label, ...props }) => {
  return (<>
    <StyledNoSignal {...props}>
      {label && <NoSignalLabel>
        {label}
      </NoSignalLabel>}
      <span />
      <span />
      <span />
    </StyledNoSignal>
  </>);
}

export default NoSignal;

