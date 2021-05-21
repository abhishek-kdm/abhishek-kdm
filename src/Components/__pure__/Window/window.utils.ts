import { useCallback, useContext } from 'react';
import { DesktopStateContext } from '../../Desktop/desktop.utils';

export const useNavigate = (windowId: WindowID): (props: Omit<WindowProps, 'windowId'>) => void => {
  const { updateWindowState } = useContext(DesktopStateContext) as DesktopState;

  return useCallback((props) => {
    updateWindowState((state) => ({
      ...state,
      windows: state.windows.reduce((acc, w) => [
        ...acc,
        w.windowId === windowId ? { ...w, ...props } : w
      ], [] as WindowProps[]),
    }));
  }, [updateWindowState, windowId]);
}
