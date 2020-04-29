import { useEffect, useState, useCallback } from 'react';
import { isTouchDevice, randInt } from '.';


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

export const useAutoTyper = (
  completeText: string,
  preDelay?: Maybe<number>
) => {
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const delay = randInt(10, 150);
    let t = setTimeout(() => {
      setText((t) => (
        index < completeText.length ? t + completeText[index] : t
      ));
    }, index === 0 ? delay + (preDelay || 0) : delay);

    return () => { clearTimeout(t); }
  }, [index, preDelay, setText, completeText]);

  useEffect(() => { setIndex((i) => text.length > 0 ? i + 1 : i); }, [text]);

  return text;
}

export const useCurrentDate = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => { setTime(new Date()); }, 1000);
    return () => clearInterval(t);
  }, []);

  return time;
}
