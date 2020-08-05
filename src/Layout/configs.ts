import About from '../components/About/about.component';
import Projects from '../components/Projects/projects.component';
import Social from '../components/Social/social.component';

export const navbarItems: NavbarItem[] = [
  {
    label: 'about',
    component: About,
    args: {autoType: true },
    titlePrompt: './aboutme'
  },
  {
    label: 'projects',
    component: Projects,
    titlePrompt: './projects'
  },
  {
    label: 'social',
    component: Social,
    titlePrompt: './social'
  },
];

