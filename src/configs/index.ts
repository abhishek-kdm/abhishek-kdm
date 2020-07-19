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
export interface LINK {
  label: string
  href: string
}

export const SOCIAL_LINKS: { title: string, sub: LINK[] }[] = [
  {
    title: 'SCM',
    sub: [
      {
        label: 'Github',
        href: 'https://github.com/lycuid',
      },
      {
        label: 'Personal Git Server',
        href: 'https://git.lycuid.dev',
      },
    ]
  },
  {
    title: 'work',
    sub: [
      {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/abhishek-kadam-26a06170',
      },
      {
        label: 'Stackoverflow',
        href: 'https://stackoverflow.com/users/3065657/lycuid',
      },
    ]
  },
  {
    title: 'Others:',
    sub: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/lycuid',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/user/sudo-tux',
      },
      {
        label: 'Discord',
        href: 'https://www.discordapp.com/channels/lycuid',
      },
    ]
  }
];


export const GITHUB = {
  username: 'lycuid',
  get user_url() {
    return `https://api.github.com/users/${this.username}`;
  },
};

export const ABOUTME = `:: A Minimalist, old school, software developer.
:: love computers, video games (that sort of stuff).`;

