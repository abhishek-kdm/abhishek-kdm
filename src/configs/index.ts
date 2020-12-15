import {
  // eslint-disable-next-line no-unused-vars
  IconDefinition,

  faGithub,
  faStackOverflow,
  faLinkedin,
  faTwitter,
  faReddit,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import ZergLogo from '../components/__pure__/SVG/Logo/zerg.logo';
import TerranLogo from '../components/__pure__/SVG/Logo/terran.logo';
import ProtossLogo from '../components/__pure__/SVG/Logo/protoss.logo';

// reference for theme.
export const RACE: { [name in Race]: Race } = {
  zerg: 'zerg',
  terran: 'terran',
  protoss: 'protoss',
};

export const RACE_PROPS: { [name in Race]: RaceProps } = {
  zerg: {
    patternColor: '#0a0a0aa0',
    backgroundColor: '#2c483586',
    logo: ZergLogo,
  },
  terran: {
    patternColor: '#0a0a0aa0',
    backgroundColor: '#cad3c818',
    logo: TerranLogo,
  },
  protoss: {
    patternColor: '#e7825970',
    backgroundColor: '#eebaa59F',
    logo: ProtossLogo,
  },
};

// reference for warpgates orientation.
export const ORIENTATION: { [name in Orientation]: Orientation } = {
  vertical: 'vertical',
  horizontal: 'horizontal',
}

// time (in ms) taken by a single warpgate to open.
export const WARPGATE_ACTION_TIME = 500;

// time (in ms) delay between opening multiple warpgates.
export const WARPGATES_OPEN_DELAY = 300;

// type for the list of social links.
export interface Link {
  title: string
  href: string
  iconProps: { color: string, icon: IconDefinition }
}

export const SOCIAL_LINKS: Link[] = [
  {
    title: 'github',
    href: 'https://github.com/lycuid/',
    iconProps: { color: '#ffffff', icon: faGithub }
  },
  {
    title: 'stackoverflow',
    href: 'https://stackoverflow.com/users/3065657/lycuid/',
    iconProps: { color: '#f48024', icon: faStackOverflow }
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/abhishek-kadam-26a06170/',
    iconProps: { color: '#0077bb', icon: faLinkedin }
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/lycuid/',
    iconProps: { color: '#1da1f2', icon: faTwitter }
  },
  {
    title: 'reddit',
    href: 'https://www.reddit.com/user/lycuid/',
    iconProps: { color: '#ff4500', icon: faReddit }
  },
  {
    title: 'discord',
    href: 'https://www.discordapp.com/channels/~sudo/',
    iconProps: { color: '#7289da', icon: faDiscord }
  },
];


export const GITHUB = {
  username: 'lycuid',
  get user_url() {
    return `https://api.github.com/users/${this.username}`;
  },
};

