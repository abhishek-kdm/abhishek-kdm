import React, { useState, useEffect, useContext } from 'react';
import Main from './Desktop.style';
import { DesktopItems } from './Desktop.utils';
import { GlobalContext } from '@/Utils';

import Window from '@/Components/__pure__/Window/Window.component';
import File, { FileProps } from '@/Components/__pure__/File/File.component';
import Directory from '@/Components/__pure__/Directory/Directory.component';
import Noscript from '@/Components/Noscript/Noscript.component';

interface DesktopProps extends React.HTMLAttributes<HTMLDivElement> { }

const Desktop: React.FC<DesktopProps> = (props) => {
    const { windowState } = useContext(GlobalContext) as ScreenState;
    // The only reason this is here is because desktopItems are not be rendered
    // staticly, just so that we can have a proper interface for non-javascript
    // browsers.
    const [desktopItems, setDesktopItems] = useState<FileProps[]>([]);
    useEffect(() => { setDesktopItems(DesktopItems) }, []);

    return (
        <>
            <Main {...props}>
                <Noscript />
                {desktopItems.map((props) =>
                    props.fileType === 'file'
                        ? <File {...props} draggable key={`file-${props.windowId}`} />
                        : <Directory {...props} draggable key={`dir-${props.windowId}`} />
                )}
                {windowState.windows.map((props) => (
                    <Window key={`window-${props.windowId}`} {...props} />
                ))}
            </Main>
        </>
    );
};

export default Desktop;
