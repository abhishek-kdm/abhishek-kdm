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
      <Title>Professional</Title>
      <SocialLinks>
        <li>
          <span>
            <Anchor title={'Professional experience and stuff.'} href={'https://aboutme.lycuid.dev'}>
              aboutme.lycuid.dev
            </Anchor>
          </span>
        </li>
        <li>
          <span>
            <Anchor title={'Personal repositories server'} href={'https://git.lycuid.dev'}>
              git.lycuid.dev
            </Anchor>
          </span>
        </li>
      </SocialLinks>
      <Title>Alternatives</Title>
      <SocialLinks>
        <li>
          <span>
            <Anchor
              title={'My Gopherspace'}
              href={`https://gopher.floodgap.com/gopher/gw?a=${encodeURIComponent('gopher://lycuid.dev')}`}
            >
              gopher://lycuid.dev:70
            </Anchor>
          </span>
        </li>
      </SocialLinks>
      <hr />
      <div style={{ display: 'flex' }}>
        <span>Other stuff:</span>
        <IconLinkContainer>
          {SOCIAL_LINKS.map(({ title, href, iconProps }, i) => (
            <IconLink key={i}>
              <span>
                <Anchor title={title} href={href}>
                  <FontAwesomeIcon {...iconProps} size={'1x'} />
                </Anchor>
              </span>
            </IconLink>
          ))}
        </IconLinkContainer>
      </div>

    </StyledSocial>
  </>);
}

export default Social;

