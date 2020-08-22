import React from 'react';
import StyledSocial, {
  SocialLinks,
  IconLinkContainer,
  IconLink
} from './social.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SOCIAL_LINKS } from '../../configs';

import { Anchor } from '../../utils/components';

interface SocialProps extends React.HTMLAttributes<HTMLElement> { }

const Social: React.FC<SocialProps> = (props) => {

  return (<>
    <StyledSocial {...props} id={'social'}>
      <SocialLinks>
        <li>
          <Anchor
            title={'personal git server'}
            href={'https://git.lycuid.dev'}
          >
            Personal Git Server
          </Anchor>
        </li>
      </SocialLinks>
      <IconLinkContainer>
        {SOCIAL_LINKS.map(({ title, href, iconProps }, i) => (
          <IconLink key={i}>
            <Anchor title={title} href={href}>
              <FontAwesomeIcon {...iconProps} size={'1x'} />
            </Anchor>
          </IconLink>
        ))}
      </IconLinkContainer>
    </StyledSocial>
  </>);
}

export default Social;

