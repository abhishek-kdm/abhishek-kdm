import React from 'react';
import StyledSocial, { LinkContainer, Link } from './social.style';

import { SOCIAL_LINKS } from '../../configs';

import Prompt from '../__pure__/Prompt/prompt.component';
import { Anchor } from '../../utils/components';

interface SocialProps { }

const Social: React.FC<SocialProps> = () => {

  return (<>
    <Prompt>{'./social'}</Prompt>
    <StyledSocial>
      <LinkContainer>
        {SOCIAL_LINKS.map(({ title, href }, i) => (
          <Link key={i}>
            <Anchor title={title} href={href}>
              {title}
            </Anchor>
          </Link>
        ))}
      </LinkContainer>
    </StyledSocial>
  </>);
}

export default Social;

