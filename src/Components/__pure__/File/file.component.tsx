import React, { useContext, useCallback } from 'react';
import { DraggableFile, NonDraggableFile, FileOnlyProps } from './file.utils';

import { DesktopStateContext } from '../../Desktop/desktop.utils';
import { Open } from '../../../Utils';

export type FileProps = FileOnlyProps & Partial<WindowAttributes>;

const File: React.FC<FileProps> = ({ children, windowType, ...props }) => {
  const { updateWindowState } = useContext(DesktopStateContext) as DesktopState;

  const openWindow = useCallback(() => {
    updateWindowState((state) => (props?.windowId ? {
      ...state,
      windows: Open(props.windowId, state.windows)
        ? state.windows
        : [
            ...state.windows,
            {
              children,
              windowId: props.windowId,
              windowType: windowType || 'file',
              name: props.name,
            }
        ]
    } : state));
  }, [updateWindowState, children, windowType, props]);

  if (props.windowId) {
    props.onDoubleClick = openWindow;
    props.onKeyPress = (e) => e.key.toLowerCase() === 'enter' && openWindow();
  }
  props.tabIndex = 0;

  return props.draggable ? <DraggableFile {...props} /> : <NonDraggableFile {...props} />;
}

export default File;
