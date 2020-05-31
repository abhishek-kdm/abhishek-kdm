import { createContext } from 'react';

export interface IAppContext {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>
  user: any
  repos: any
}
export const AppContext = createContext<Partial<IAppContext>>({});

export const HomeContext = createContext<any>(null);
