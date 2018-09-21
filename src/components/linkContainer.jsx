import React, { Component } from 'react';
import { LINKS } from '../configs/contants';


export default class LinkContainer extends Component {
  constructor(props) { super(props) }

  links = () => [
    { title: 'github', href: LINKS.github, icon: { color: 'black', class: 'github' } },
    { title: 'stack-overflow', href: LINKS.stackoverflow, icon: { color: '#F48024', class: 'stack-overflow' } },
    { title: 'linkedin', href: LINKS.linkedin, icon: { color: '#0077BB', class: 'linkedin' } },
    { title: 'twitter', href: LINKS.twitter, icon: { color: '#1DA1F2', class: 'twitter' } },
    { title: 'reddit', href: LINKS.reddit, icon: { color: '#FF4500', class: 'reddit' } },
  ]

  render() {
    return (
      <div className='link-container'>
      {this.links().map((link, i) => (
        <div key={i} className={'tooltip-parent'}>
          <span className='tooltip-text'>{link.title}</span>
          <a className={'link'} href={link.href} target='_blank'>
            {
              link.title !== 'stack-overflow' ? <i style={{ color: link.icon.color }} className={`fa fa-${link.icon.class}`} />
              : <img style={{ width: '1.5rem' }} src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e" alt="stack-overflow" />
            }
          </a>
        </div>
      ))}
      </div>
    )
  }
}