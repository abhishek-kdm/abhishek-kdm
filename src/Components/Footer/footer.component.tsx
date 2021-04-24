import React from 'react';
import StyledFooter, { ThemeToggler } from './footer.style';

interface FooterProps extends React.HTMLAttributes<HTMLElement> { }

const Footer: React.FC<FooterProps> = (props) => {
  return (<>
    <StyledFooter {...props}>
      <div style={{ display: 'flex', flex: '1' }} /><ThemeToggler />
    </StyledFooter>
  </>);
}

export default Footer;
