import * as React from 'react';
import { LINKS } from '../configs';

export default (): JSX.Element => {

  const links = (): Link[] => [
    { title: 'github', href: LINKS.github, icon: { color: 'white', class: 'github' } },
    { title: 'stackoverflow', href: LINKS.stackoverflow, icon: { color: '#F48024', class: 'stack-overflow' } },
    { title: 'linkedin', href: LINKS.linkedin, icon: { color: '#0077BB', class: 'linkedin' } },
    { title: 'twitter', href: LINKS.twitter, icon: { color: '#1DA1F2', class: 'twitter' } },
    { title: 'reddit', href: LINKS.reddit, icon: { color: '#FF4500', class: 'reddit' } },
    { title: 'discord', href: LINKS.reddit, icon: { color: '#7289DA', class: 'discord' } },
  ];

  return (<>
    <div className='link-container'>
    {links().map((link, i) => (
      <div key={i}>
        <a className={'link'} title={link.title} href={link.href} target='_blank'>
          <i style={{ color: link.icon.color }} className={`fab fa-3x fa-${link.icon.class}`} />
        </a>
      </div>
    ))}
    </div>
  </>);
}
