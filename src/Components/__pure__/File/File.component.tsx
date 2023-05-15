import React, { useContext, useCallback } from 'react';
import { DraggableFile, NonDraggableFile, FileOnlyProps } from './File.utils';

import { GlobalContext, Open } from '@/Utils';

export type FileProps = FileOnlyProps & {
    // extra props to pass to window on 'open'.
    windowProps?: React.HTMLAttributes<HTMLElement>;
};

const File: React.FC<FileProps> = ({ children, windowProps, ...props }) => {
    const { updateWindowState, raiseWindow } = useContext(GlobalContext) as ScreenState;

    const openWindow = useCallback(() => {
        updateWindowState((state) =>
            props.windowId
                ? {
                    ...state,
                    windows: Open(props.windowId, state.windows)
                        ? state.windows
                        : [
                            ...state.windows,
                            {
                                windowId: props.windowId,
                                fileType: props.fileType || 'file',
                                name: props.name || '',
                                minimized: false,
                                children,
                                ...windowProps,
                            },
                        ],
                }
                : state
        );
        if (props.windowId) raiseWindow(props.windowId);
    }, [updateWindowState, children, props, windowProps, raiseWindow]);

    if (props.windowId) {
        props.onDoubleClick = openWindow;
        props.onKeyDown = (e) => e.key.toLowerCase() === 'enter' && openWindow();
    }
    props.tabIndex = 0;

    return props.draggable
        ? <DraggableFile {...props} />
        : <NonDraggableFile {...props} />;
};

export default File;
