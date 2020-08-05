import React from 'react';
import StyledSocial, { LinkContainer, Link } from './social.style';

import { SOCIAL_LINKS } from '../../configs';

import Title from '../__pure__/Title/title.component';
import { Anchor } from '../../utils/components';

interface SocialProps extends React.HTMLAttributes<HTMLElement> { }

const Social: React.FC<SocialProps> = (props) => {

  return (<>
    <StyledSocial {...props} id={'social'}>
      {SOCIAL_LINKS.map(({ title, subs }, i) => (<React.Fragment key={i}>
      <Title>{title}</Title>
      <LinkContainer>
        {subs.map(({ label, href }, j) => (
          <Link key={j}>
            <Anchor title={label} href={href}>
              {label}
            </Anchor>
          </Link>
        ))}
      </LinkContainer>
      <hr />
      </React.Fragment>))}
    </StyledSocial>
  </>);
}

export default Social;

