import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import StyledWindow, {
  WindowHeader,
  WindowTitle,
  WindowControls,
  WindowContent,
} from './window.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';

import { DesktopStateContext } from '../../Desktop/desktop.utils';
import { newPoint } from '../../../Utils';

const Window: React.FC<WindowProps> = ({
  windowId,
  fileType,
  name,
  children,
  style,
  ...props
}) => {
  const { offset, active, index, updateWindowState } = useContext(
    DesktopStateContext
  ) as DesktopState;

  const [transform, setTransform] = useState<Point>({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(index + 1);

  const wOffset = useMemo(
    () => (active === windowId ? offset : newPoint()),
    [active, windowId, offset]
  );

  const handleClose = useCallback(() => {
    updateWindowState((state) => ({
      ...state,
      windows: state.windows.filter((w) => w.windowId !== windowId),
    }));
  }, [updateWindowState, windowId]);

  const finalTransform = useCallback(() => {
    setTransform(({ x, y }) => ({ x: x + wOffset.x, y: y + wOffset.y }));
  }, [wOffset]);

  useEffect(() => {
    updateWindowState((state) => ({ ...state, index: zIndex }));
  }, [updateWindowState, zIndex]);

  return (
    <>
      <StyledWindow
        {...props}
        animate
        tabIndex={0}
        fullscreen={fullscreen}
        onFocus={() => {
          setZIndex((z) => (z == index ? z : index + 1));
        }}
        style={{
          ...style,
          zIndex,
          transform: fullscreen
            ? 'scale(1)'
            : `translate3d(${transform.x + wOffset.x}px, ${
                transform.y + wOffset.y
              }px, 0px)`,
        }}
      >
        <WindowHeader
          style={{ cursor: active ? 'grabbing' : 'grab' }}
          onDoubleClick={() => {
            setFullscreen((f) => !f);
          }}
          onTouchStart={() => {
            updateWindowState((state) =>
              !fullscreen ? { ...state, active: windowId || null } : state
            );
          }}
          onMouseDown={({ nativeEvent: { button } }) => {
            updateWindowState((state) =>
              button === 0 && !fullscreen
                ? { ...state, active: windowId || null }
                : state
            );
          }}
          onTouchEnd={finalTransform}
          onMouseUp={finalTransform}
        >
          <WindowTitle>
            <FontAwesomeIcon
              icon={fileType === 'file' ? faFileAlt : faFolder}
            />
            &nbsp;&nbsp;{name}
          </WindowTitle>
          <WindowControls>
            <span onClick={handleClose}>&#x2b24;</span>
            <span
              onClick={() => {
                setFullscreen((f) => !f);
              }}
            >
              &#x2b24;
            </span>
            <span onClick={handleClose}>&#x2b24;</span>
          </WindowControls>
        </WindowHeader>

        <WindowContent>{children}</WindowContent>
      </StyledWindow>
    </>
  );
};

export default Window;
