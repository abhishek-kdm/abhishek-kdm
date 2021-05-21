import React from 'react';
import StyledFooter from './footer.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

interface FooterProps extends React.HTMLAttributes<HTMLElement> { }

const Footer: React.FC<FooterProps> = (props) => {
  return (<>
    <StyledFooter {...props}>
      <span>
        <label htmlFor='menu-toggler'>
          <FontAwesomeIcon icon={faCog} style={{ cursor: 'pointer' }} />
        </label>
      </span>
    </StyledFooter>
  </>);
}

export default Footer;
