import { useCallback, useContext } from 'react';
import { DesktopStateContext } from '../../../Context';

export const useNavigate = (windowId: Maybe<string> = null, props: Partial<WindowAttributes>): () => void => {
  const { updateWindowState } = useContext(DesktopStateContext) as DesktopState;

  return useCallback(() => {
    updateWindowState((state) => ({
      ...state,
      windows: state.windows.reduce((acc, w) => [
        ...acc,
        windowId && w.windowId === windowId ? { ...w, ...props } : w
      ], [] as WindowAttributes[]),
    }));
  }, [updateWindowState, windowId, props]);
}
