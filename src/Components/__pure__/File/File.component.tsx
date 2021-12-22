import React, { useContext, useCallback } from 'react';
import { DraggableFile, NonDraggableFile, FileOnlyProps } from './File.utils';

import { GlobalContext } from '../../../Utils';
import { Open } from '../../../Utils';

export type FileProps = FileOnlyProps & {
  // extra props to pass to window on 'open'.
  windowProps?: React.HTMLAttributes<HTMLElement>;
};

const File: React.FC<FileProps> = ({ children, windowProps, ...props }) => {
  const { updateWindowState, bringToTop } = useContext(
    GlobalContext
  ) as ScreenState;

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
    if (props.windowId) bringToTop(props.windowId);
  }, [updateWindowState, children, props, windowProps, bringToTop]);

  if (props.windowId) {
    props.onDoubleClick = openWindow;
    props.onKeyPress = (e) => e.key.toLowerCase() === 'enter' && openWindow();
  }
  props.tabIndex = 0;

  return props.draggable ? (
    <DraggableFile {...props} />
  ) : (
    <NonDraggableFile {...props} />
  );
};

export default File;
