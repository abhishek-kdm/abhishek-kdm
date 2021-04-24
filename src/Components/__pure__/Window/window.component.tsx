import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react';
import StyledWindow, {
  WindowHeader,
  WindowTitle,
  WindowControls,
  WindowBody,
} from './window.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';

import { DesktopStateContext } from '../../../Context';
import { newPoint } from '../../../Utils';

interface WindowProps extends WindowAttributes { }

const Window: React.FC<WindowProps> = ({ windowId, windowType, name, children, ...props }) => {
  const { offset, active, index, updateWindowState } = useContext(DesktopStateContext) as DesktopState;

  const [transform, setTransform] = useState<Point>({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(index + 1);

  const wOffset = useMemo(() => active === windowId ? offset : newPoint(), [active, windowId, offset]);

  const handleClose = useCallback(() => { updateWindowState((state) => ({
      ...state,
      windows: state.windows.filter((w) => w.windowId !== windowId)
    }));
  }, [updateWindowState, windowId])

  useEffect(() => {
    updateWindowState((state) => ({ ...state, index: zIndex }));
  }, [updateWindowState, zIndex]);

  return (<>
    <StyledWindow {...props} retro animate
      tabIndex={0}
      fullscreen={fullscreen}
      onFocus={() => { setZIndex((z) => z == index ? z : index + 1 ); }}
      style={{
        zIndex,
        transform: fullscreen
          ? 'scale(1)'
          : `translate3d(${transform.x + wOffset.x}px, ${transform.y + wOffset.y}px, 0px)`,
      }}
    >
      <WindowHeader
        style={{ cursor: active ? 'grabbing' : 'grab' }}
        onDoubleClick={() => { setFullscreen(f => !f); }}
        onMouseDown={({ nativeEvent: { button } }) => {
          updateWindowState((state) => button === 0
            ? { ...state, active: windowId || null } : state);
        }}
        onMouseUp={() => {
          setTransform(({ x, y }) => ({ x: x + wOffset.x, y: y + wOffset.y }));
        }}
      >
        <WindowTitle>
          <FontAwesomeIcon icon={windowType === 'file' ? faFileAlt : faFolder} />
          &nbsp;&nbsp;{name}
        </WindowTitle>
        <WindowControls>
          <span onClick={handleClose}>&#x2b24;</span>
          <span onClick={() => { setFullscreen(f => !f); }}>&#x2b24;</span>
          <span onClick={handleClose}>&#x2b24;</span>
        </WindowControls>
      </WindowHeader>

      <WindowBody>{children}</WindowBody>
    </StyledWindow>
  </>);
}

export default Window;
