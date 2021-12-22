import React, { useState, useContext, useMemo, useCallback } from 'react';
import StyledWindow, {
  WindowHeader,
  WindowTitle,
  WindowControls,
  WindowContent,
} from './Window.style';
import { Button } from '../../../Styles/global.style';

import { IconFile, IconDirectory } from '../File/File.utils';
import { GlobalContext } from '../../../Utils';
import { newPoint } from '../../../Utils';

const Window: React.FC<WindowProps> = ({
  windowId,
  fileType,
  name,
  minimized,
  children,
  style,
  ...props
}) => {
  const {
    windowState: { windowOffset, dragWindow },
    updateWindowState,
    bringToTop,
  } = useContext(GlobalContext) as ScreenState;

  const [transform, setTransform] = useState<Point>({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const offset = useMemo(
    () => (dragWindow === windowId ? windowOffset : newPoint()),
    [dragWindow, windowId, windowOffset]
  );

  const handleClose = useCallback(() => {
    updateWindowState((state) => ({
      ...state,
      windows: state.windows.filter((w) => w.windowId !== windowId),
    }));
  }, [updateWindowState, windowId]);

  const finalTransform = useCallback(() => {
    setTransform(({ x, y }) => ({ x: x + offset.x, y: y + offset.y }));
  }, [offset]);

  return (
    <>
      <StyledWindow
        {...props}
        animate
        tabIndex={0}
        fullscreen={fullscreen}
        onFocus={() => bringToTop(windowId)}
        style={{
          ...style,
          transform: minimized
            ? 'scale(0)'
            : fullscreen
            ? 'scale(1)'
            : `translate3d(${transform.x + offset.x}px, ${
                transform.y + offset.y
              }px, 0px)`,
        }}
      >
        <WindowHeader>
          <WindowTitle
            style={{ cursor: dragWindow === windowId ? 'grabbing' : 'grab' }}
            onDoubleClick={() => {
              setFullscreen((f) => !f);
            }}
            onTouchStart={() => {
              updateWindowState((state) =>
                !fullscreen ? { ...state, dragWindow: windowId } : state
              );
            }}
            onMouseDown={({ nativeEvent: { button } }) => {
              updateWindowState((state) =>
                button === 0 && !fullscreen
                  ? { ...state, dragWindow: windowId }
                  : state
              );
            }}
            onTouchEnd={finalTransform}
            onMouseUp={finalTransform}
          >
            <span>
              {fileType === 'file' ? <IconFile /> : <IconDirectory />}
              &nbsp;{name}&nbsp;
            </span>
          </WindowTitle>
          <WindowControls>
            <Button
              onClick={() => {
                updateWindowState((state) => ({
                  ...state,
                  windows: state.windows.map((w) =>
                    w.windowId === windowId ? { ...w, minimized: true } : w
                  ),
                }));
              }}
            >
              &#xff3f;
            </Button>
            <Button
              onClick={() => {
                setFullscreen((f) => !f);
              }}
            >
              &#x2610;
            </Button>
            <Button onClick={handleClose}>&times;</Button>
          </WindowControls>
        </WindowHeader>

        <WindowContent>{children}</WindowContent>
      </StyledWindow>
    </>
  );
};

export default Window;
