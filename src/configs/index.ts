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


// reference for theme.
export const THEME: { [name in Theme]: Theme } = {
  zerg: 'zerg',
  terran: 'terran',
  protoss: 'protoss',
};

export const THEME_BACKGROUND_COLOR: { [name in Theme]: string } = {
  zerg: '#2C483586',
  terran: '#CAD3C818',
  protoss: '#EEBAA59f',
};

// right now its just for styling the hyperdrive canvas.
export const FULL_SCREEN_STYLE: React.CSSProperties = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  zIndex: 10000,
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
    href: 'https://github.com/abhishek-kdm/',
    iconProps: { color: 'white', icon: faGithub }
  },
  {
    title: 'stackoverflow',
    href: 'https://stackoverflow.com/users/3065657/abhishek-kdm/',
    iconProps: { color: '#F48024', icon: faStackOverflow }
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/abhishek-kadam-26a06170/',
    iconProps: { color: '#0077BB', icon: faLinkedin }
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/abhishek_kdm/',
    iconProps: { color: '#1DA1F2', icon: faTwitter }
  },
  {
    title: 'reddit',
    href: 'https://www.reddit.com/user/sudo-tux/',
    iconProps: { color: '#FF4500', icon: faReddit }
  },
  {
    title: 'discord',
    href: 'https://www.discordapp.com/channels/~sudo/',
    iconProps: { color: '#7289DA', icon: faDiscord }
  },
];


export const GITHUB = {
  username: 'abhishek-kdm',
  get user_url() {
    return `https://api.github.com/users/${this.username}`;
  },
};

export const ABOUTME = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium, praesentium itaque iure aliquid, unde velit sit architecto assumenda illo iste, ad atque dolorum fugit natus asperiores exercitationem ipsa quia!At magni aliquid nemo quis! Vero ab, saepe ad temporibus culpa itaque nulla. Similique error ratione quibusdam quisquam aperiam odit? Labore laboriosam ad architecto blanditiis consequatur reiciendis ullam cupiditate rerum?`;
