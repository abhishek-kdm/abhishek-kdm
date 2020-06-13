import React from 'react';
import './social.style.css';

import { SOCIAL_LINKS } from '../../configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Prompt from '../__pure__/Prompt/prompt.component';
import { Anchor } from '../../utils/components';


interface SocialProps { }

const Social: React.FC<SocialProps> = () => {

  return (<>
    <Prompt>{'./social'}</Prompt>
    <div id='social'>
      <div className='link-container'>
        {SOCIAL_LINKS.map(({ title, href, iconProps }, i) => (
          <Anchor
            key={i}
            className={'link'}
            title={title}
            href={href}
            target='_blank' rel='noopener noreferrer'
          >
            <FontAwesomeIcon {...iconProps} size={'3x'} />
          </Anchor>
        ))}
      </div>
    </div>
  </>);
}

export default Social;

