import React, { useState, useEffect, useCallback } from 'react';
import StyledDesktop from './desktop.style';
import { DesktopItems, DesktopStateContext } from './desktop.utils';

import Window from '../__pure__/Window/window.component';
import File, { FileProps } from '../__pure__/File/file.component';
import Directory from '../__pure__/Directory/directory.component';

import Noscript from '../NoScript/noscript.component';

import { newPoint } from '../../Utils';
import { useStateReducer } from '../../Utils/hooks';

interface DesktopProps extends React.HTMLAttributes<HTMLDivElement> { }

const Desktop: React.FC<DesktopProps> = (props) => {
  // The only reason this is here is because desktopItems are not be rendered
  // staticly,just so that we can have a proper interface for non javascript browsers.
  const [desktopItems, setDesktopItems] = useState<FileProps[]>([]);
  useEffect(() => { setDesktopItems(DesktopItems); }, []);

  const [windowState, updateWindowState] = useState<WindowState>({
    windows: [],
    active: null,
    index: 999,
  });

  const [dragState, dispatchDragState] = useStateReducer({
    start: newPoint(),
    offset: newPoint(),
  });
  const { start, offset } = dragState;

  const handleStart = useCallback(({ pageX, pageY }) => {
    dispatchDragState({ start: { x: pageX, y: pageY }, offset: newPoint() });
  }, [dispatchDragState]);

  const handleEnd = useCallback(() => {
    updateWindowState((s) => ({ ...s, active: null }));
    dispatchDragState({ start: newPoint() });
  }, [dispatchDragState]);

  const handleMove = useCallback(({ pageX, pageY }) => {
    windowState.active != null && dispatchDragState({
      offset: { x: pageX - start.x, y: pageY - start.y }
    });
  }, [start, windowState.active, dispatchDragState]);

  return (<>
    <StyledDesktop {...props} onMouseDown={handleStart} onMouseUp={handleEnd} onMouseMove={handleMove}>
      <DesktopStateContext.Provider value={{ ...windowState, updateWindowState, offset }}>

        {/* non javascript static content */}
        <Noscript />

        {/* desktop items. */}
        {desktopItems.map((props) => (props.windowType === 'file')
          ? <File {...props} draggable key={`file-${props.windowId}`} />
          : <Directory {...props} draggable key={`directory-${props.windowId}`} />
        )}
        {/* actively open windows. */}
        {windowState.windows.map((props) => (
          <Window key={`window-${props.windowId}`} {...props} />
        ))}
      </DesktopStateContext.Provider>
    </StyledDesktop>
  </>);
}

export default Desktop;
