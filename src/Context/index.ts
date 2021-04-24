import { createContext } from 'react';

export const DesktopStateContext = createContext<Partial<DesktopState>>({});
export const RootContext = createContext<RootState>({ repos: [] });
