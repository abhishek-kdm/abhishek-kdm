import React from 'react';

import About from '../About/About.component';
import Social from '../Social/Social.component';
import Repositories from '../Repositories/Repositories.component';
import { FileProps } from '../__pure__/File/File.component';

export const DesktopItems: FileProps[] = [
  {
    title: 'About me',
    children: <About />,
    windowId: 'about',
    name: 'About me',
    fileType: 'file',
  },
  {
    title: 'Social',
    children: <Social />,
    windowId: 'social',
    name: 'Social',
    fileType: 'file',
  },
  {
    title: 'Repositories',
    children: <Repositories windowId={'repositories'} />,
    windowId: 'repositories',
    name: 'Repositories',
    fileType: 'dir',
    windowProps: {
      style: { width: '425px', height: '70%' },
    },
  },
];
