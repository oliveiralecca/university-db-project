import {
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { useData, UseDataResult } from '../hooks/useData';

type DataState = {
  users: UseDataResult[];
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataState | null>(null)

function DataProvider({ children }: DataProviderProps) {
  const users = useData()

  return (
    <DataContext.Provider value={{ users }}>
      {children}
    </DataContext.Provider>
  )
}

function useDataResults() {
  const context = useContext(DataContext)

  return context?.users
}

export { DataProvider, useDataResults };
