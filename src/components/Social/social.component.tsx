import React from 'react';
import StyledSocial, { LinkContainer, Link } from './social.style';

import { SOCIAL_LINKS } from '../../configs';

import Title from '../__pure__/Title/title.component';
import Prompt from '../__pure__/Prompt/prompt.component';
import { Anchor } from '../../utils/components';

interface SocialProps { }

const Social: React.FC<SocialProps> = () => {

  return (<>
    <Prompt>{'./social'}</Prompt>
    <StyledSocial>
      {SOCIAL_LINKS.map(({ title, sub }, i) => (<React.Fragment key={i}>
        <hr />
        <Title>{title}</Title>
        <LinkContainer>
          {sub.map(({ label, href }, j) => (
            <Link key={j}>
              <Anchor title={label} href={href}>
                {label}
              </Anchor>
            </Link>
          ))}
        </LinkContainer>
      </React.Fragment>))}
    </StyledSocial>
  </>);
}

export default Social;

