import { useEffect, useState, useCallback, useMemo } from 'react';
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
  preDelay?: Maybe<number>,
  startIndex: number = 0
) => {
  const [text, setText] = useState<string>(completeText.slice(0, startIndex + 1));
  const [index, setIndex] = useState<number>(startIndex);

  useEffect(() => {
    const delay = randInt(10, 50);
    let t = setTimeout(() => {
      setText((t) => (
        index < completeText.length ? t + completeText[index] : t
      ));
    }, index === startIndex ? delay + (preDelay || 0) : delay);

    return () => { clearTimeout(t); }
  }, [index, preDelay, setText, completeText, startIndex]);

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

export const useNavigationTabs = <T extends { [index: string]: any }>(
  items: T[],
  selector: string
) => {
  const [selection, setSelection] = useState<string>(items[0][selector]);

  const selectedItem = useMemo(() => (
    items.find((i: T) => i[selector] === selection)
  ), [selector, items, selection]);

  return { selectedItem, selection, setSelection };
}

