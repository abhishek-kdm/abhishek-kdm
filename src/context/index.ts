import { createContext } from 'react';

export interface IAppContext {
  repos: Maybe<any[]>
  race: Race
  setRace: React.Dispatch<React.SetStateAction<Race>>
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppContext = createContext<Partial<IAppContext>>({});

export const HomeContext = createContext<any>(null);
