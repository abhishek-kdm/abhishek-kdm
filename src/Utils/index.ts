import { createContext } from 'react';

export const newPoint = (): Point => ({ x: 0, y: 0 });
export const Open = (item: string, list: FileWindowAttributes[]): boolean =>
    list.some((i) => i.windowId === item);

export const GlobalContext = createContext<
    { repos: GithubRepository[] } & Partial<ScreenState>
>({
    repos: [],
});
