import React, { useState, useCallback } from 'react';
import StyledDesktop from './desktop.style';

import About from '../About/about.component';
import Social from '../Social/social.component';
import Projects from '../Projects/projects.component';

import Window from '../__pure__/Window/window.component';
import File, { FileProps } from '../__pure__/File/file.component';
import Directory from '../__pure__/Directory/directory.component';

import Noscript from '../NoScript/noscript.component';

import { newPoint } from '../../Utils';
import { useStateReducer } from '../../Utils/hooks';
import { DesktopStateContext } from '../../Context';

interface DesktopProps extends React.HTMLAttributes<HTMLDivElement> { }

const Desktop: React.FC<DesktopProps> = (props) => {
  // This is a static value. Although using state hook here, because, I only need
  // this to render if javascript is enabled.
  const [desktopItems, setDesktopItems] = useState<FileProps[]>([
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
    ((): FileProps => ({
      windowId: 'projects',
      name: 'Projects',
      windowType: 'dir',
      get children() { return <Projects windowId={this.windowId || ''} /> },

      get title() { return this.name },
    }))(),
  ]);

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
          ? <File key={`file-${props.windowId}`} {...props} draggable />
          : <Directory key={`directory-${props.windowId}`} {...props} draggable />
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
