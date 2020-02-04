import { useEffect, useState, useCallback } from 'react';
import { isTouchDevice } from '.';


export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState<boolean>(isTouchDevice());

  const resizeHandler = useCallback(() => {
    setIsTouch(isTouchDevice());
  }, [setIsTouch]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [resizeHandler]);
  return isTouch;
}
