import { useReducer, Reducer, Dispatch } from 'react';

const stateReducer = <T extends Record<string, unknown>>
  (oldState: T, newState: Partial<T>) => ({ ...oldState, ...newState });

export const useStateReducer = <T extends Record<string, unknown>>
  (state: T): [T, Dispatch<Partial<T>>] => useReducer<Reducer<T, Partial<T>>>(stateReducer, state);
