import { useState, useCallback, useContext, HTMLAttributes } from 'react';
import { GlobalContext, newPoint } from '../../../Utils';

export const useNavigate = (
  windowId: WindowID
): ((props: Omit<WindowProps, 'windowId'>) => void) => {
  const { updateWindowState } = useContext(GlobalContext) as ScreenState;

  return useCallback(
    (props) => {
      updateWindowState((state) => ({
        ...state,
        windows: state.windows.reduce(
          (acc, w) => [
            ...acc,
            w.windowId === windowId ? { ...w, ...props } : w,
          ],
          [] as WindowProps[]
        ),
      }));
    },
    [updateWindowState, windowId]
  );
};

// parent window hook, that contains child windows that needs to be draggable.
export const useWindowDrag = (
  windowState: WindowState,
  updateWindowState: React.Dispatch<React.SetStateAction<WindowState>>
): HTMLAttributes<HTMLElement> => {
  const [offsetStart, setOffsetStart] = useState<Point>(newPoint());

  const handleStart = useCallback(
    ({ pageX, pageY }) => {
      setOffsetStart({ x: pageX, y: pageY });
    },
    [setOffsetStart]
  );

  const handleMove = useCallback(
    ({ pageX, pageY }) => {
      windowState.dragWindow != null &&
        updateWindowState((state) => ({
          ...state,
          windowOffset: { x: pageX - offsetStart.x, y: pageY - offsetStart.y },
        }));
    },
    [offsetStart, windowState.dragWindow, updateWindowState]
  );

  const handleEnd = useCallback(() => {
    updateWindowState((s) => ({
      ...s,
      dragWindow: null,
      windowOffset: newPoint(),
    }));
    setOffsetStart(newPoint());
  }, [updateWindowState, setOffsetStart]);

  return {
    onMouseDown: handleStart,
    onMouseMove: handleMove,
    onMouseUp: handleEnd,
    onTouchStart: ({ targetTouches }) => handleStart(targetTouches[0]),
    onTouchMove: ({ targetTouches }) => handleMove(targetTouches[0]),
    onTouchEnd: handleEnd,
  };
};
