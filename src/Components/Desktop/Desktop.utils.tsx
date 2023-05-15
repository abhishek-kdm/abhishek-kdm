import React from 'react';

import About from '@/Components/About/About.component';
import Online from '@/Components/Online/Online.component';
import Repositories from '@/Components/Repositories/Repositories.component';
import { FileProps } from '@/Components/__pure__/File/File.component';

export const DesktopItems: FileProps[] = [
    {
        title: 'About me',
        children: <About />,
        windowId: 'about',
        name: 'About me',
        fileType: 'file',
    },
    {
        title: 'Online',
        children: <Online />,
        windowId: 'online',
        name: 'Online',
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
