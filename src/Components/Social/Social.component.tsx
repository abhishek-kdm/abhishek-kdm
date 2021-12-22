import React from 'react';
import StyledSocial, { MiscLinks } from './Social.style';
import { SocialLinks } from './Social.utils';

import { Anchor } from '../../Styles/global.style';

interface SocialProps extends React.HTMLAttributes<HTMLElement> {}

const Social: React.FC<SocialProps> = () => {
  return (
    <>
      <StyledSocial>
        <dl>
          <dt>Links</dt>
          <dd>
            <Anchor
              target='_blank'
              title='Professional Experience.'
              href='https://aboutme.lycuid.dev'
            >
              aboutme.lycuid.dev
            </Anchor>
            <sub>(resume)</sub>
          </dd>
          <dd>
            <Anchor
              target='_blank'
              title='Personal git server'
              href='https://git.lycuid.dev'
            >
              git.lycuid.dev
            </Anchor>
            <sub>(personal git server)</sub>
          </dd>
          <dd>
            <Anchor target='_blank' title='Live Web Apps' href='/p/'>
              lycuid.dev/p/
            </Anchor>
            <sub>(live web apps)</sub>
          </dd>
        </dl>
        <dl>
          <dt>Alternate spaces</dt>
          <dd>
            <Anchor
              target='_blank'
              title='My Gopherspace'
              href='https://gopher.floodgap.com/gopher/gw?a=gopher%3A%2F%2Flycuid.dev'
            >
              gopher://lycuid.dev:70
            </Anchor>
            <sub>(gopher hole)</sub>
          </dd>
        </dl>
        <hr />
        <MiscLinks>
          {SocialLinks.map((props, index) => (
            <li key={`social-link-${index}`}>
              <Anchor target='_blank' {...props} />
            </li>
          ))}
        </MiscLinks>
      </StyledSocial>
    </>
  );
};

export default Social;
