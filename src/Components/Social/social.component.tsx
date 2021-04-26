import React from 'react';
import StyledSocial, { MiscLinks } from './social.style';
import { SocialLinks } from './social.utils';

import { Anchor } from '../../Styles/global.style';

interface SocialProps extends React.HTMLAttributes<HTMLElement> { }

const Social: React.FC<SocialProps> = () => {
  return (<>
    <StyledSocial>
      <dl>
        <dt>Professional</dt>
        <dd>
          <Anchor
            title='Professional Experience.'
            href='https://aboutme.lycuid.dev'
          >
            aboutme.lycuid.dev
        </Anchor>
        </dd>
        <dd>
          <Anchor
            title='Personal git server'
            href='https://git.lycuid.dev'
          >
            git.lycuid.dev
          </Anchor>
        </dd>
        <dd>
          <Anchor
            title='Live Web Apps'
            href='https://lycuid.dev/p/'
          >
            live web apps
          </Anchor>
        </dd>
      </dl>
      <dl>
        <dt>Alternatives</dt>
        <dd>
          <Anchor
            title='My Gopherspace'
            href='https://gopher.floodgap.com/gopher/gw?a=gopher%3A%2F%2Flycuid.dev'
          >
            gopher://lycuid.dev:70
          </Anchor>
        </dd>
      </dl>
      <hr />
      <MiscLinks>
        {SocialLinks.map((props, index) => (
          <li key={`social-link-${index}`}>
            <Anchor {...props} />
          </li>
        ))}
      </MiscLinks>
    </StyledSocial>
  </>);
}

export default Social;
