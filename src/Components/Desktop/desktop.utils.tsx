import React from 'react';

import About from '../About/about.component';
import Social from '../Social/social.component';
import Repositories from '../Repositories/repositories.component';
import { FileProps } from '../__pure__/File/file.component';

export const DesktopItems: FileProps[] = [
  {
    windowId: 'about',
    name: 'About me',
    windowType: 'file',
    children: <About />,
  },
  {
    windowId: 'social',
    name: 'Social',
    windowType: 'file',
    children: <Social />,
    title: 'Social',
  },
  {
    windowId: 'repositories',
    name: 'Repositories',
    windowType: 'dir',
    children: <Repositories windowId={'repositories'} />,
    title: 'Repositories',
  },
];

export const DesktopStateContext = React.createContext<Partial<DesktopState>>({});
