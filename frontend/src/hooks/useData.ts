import { useEffect, useState } from "react";
import api from "../services/api";

export type UseDataResult = {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export function useData() {
  const [users, setUsers] = useState<UseDataResult[]>([]);
  
  useEffect(() => {
    api.get<UseDataResult[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return users
}
