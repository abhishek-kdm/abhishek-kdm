import React, { useContext, useCallback } from 'react';
import { DraggableFile, NonDraggableFile, FileOnlyProps } from './file.utils';

import { DesktopStateContext } from '../../Desktop/desktop.utils';
import { Open } from '../../../Utils';

export type FileProps = FileOnlyProps & {
  windowProps?: React.HTMLAttributes<HTMLElement>;
};

const File: React.FC<FileProps> = ({ children, windowProps, ...props }) => {
  const { updateWindowState } = useContext(DesktopStateContext) as DesktopState;

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
                    children,
                    ...windowProps,
                  },
                ],
          }
        : state
    );
  }, [updateWindowState, children, props, windowProps]);

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
