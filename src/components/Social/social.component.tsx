import React from 'react';
import StyledSocial, {
  SocialLinks,
  IconLinkContainer,
  IconLink
} from './social.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SOCIAL_LINKS } from '../../configs';

import { Anchor } from '../../utils/components';
import Title from '../__pure__/Title/title.component';

interface SocialProps extends React.HTMLAttributes<HTMLElement> { }

const Social: React.FC<SocialProps> = (props) => {

  return (<>
    <StyledSocial {...props} id={'social'}>
      <Title>Important</Title>
      <SocialLinks>
        <li>
          <Anchor
            title={'personal git server'}
            href={'https://git.lycuid.dev'}
          >
            Personal Git Server
          </Anchor>
        </li>
        <li>
          <Anchor
            title={'Professional experience.'}
            href={'/p/aboutme'}
          >
            Professional experience.
          </Anchor>
        </li>
      </SocialLinks>

      <Title>Alternatives</Title>
      <SocialLinks>
        <li>
          <Anchor
            title={'My Gopherspace'}
            href={`https://gopher.floodgap.com/gopher/gw?a=${encodeURIComponent('gopher://lycuid.dev')}`}
          >
            gopher://lycuid.dev:70
          </Anchor>
        </li>
        <li>telnet lycuid.dev:23</li>
      </SocialLinks>

      <hr />

      <div style={{ display: 'flex' }}>
        <span>Zoomer Links:</span>
        <IconLinkContainer>
          {SOCIAL_LINKS.map(({ title, href, iconProps }, i) => (
            <IconLink key={i}>
              <Anchor title={title} href={href}>
                <FontAwesomeIcon {...iconProps} size={'1x'} />
              </Anchor>
            </IconLink>
          ))}
        </IconLinkContainer>
      </div>

    </StyledSocial>
  </>);
}

export default Social;

