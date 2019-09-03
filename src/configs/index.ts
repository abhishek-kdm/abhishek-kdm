export const USER: string = 'abhishek-kdm';
export const GITHUB_USER_URL: string = `https://api.github.com/users/${USER}`;

export const REPO_URL = (repo: string): string => `https://api.github.com/repos/${USER}/${repo}/branches/master`;

export const BASIC_AUTHENTICATION_CREDS: string = btoa('sample');

export const LINKS: any = {
  github: 'https://github.com/abhishek-kdm',
  stackoverflow: 'https://stackoverflow.com/users/3065657/abhishek-kdm',
  linkedin: 'https://linkedin.com/in/abhishek-kadam-26a06170/',
  twitter: 'https://twitter.com/abhishek_kdm',
  reddit: 'https://www.reddit.com/user/sudo-tux',
  discord: 'https://www.discordapp.com/channel/~sudo',
}



export const ABOUT_ME: string = `~ This site is under construction.
~ Thank You for showing interest.
~ But the developer is very lazy.`
