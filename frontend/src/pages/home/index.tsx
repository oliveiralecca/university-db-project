import { User } from "../../components/User";
import { useDataResults } from "../../contexts/dataContext";
import * as S from "./styles";

export function Home() {
  const users = useDataResults();

  return (
    <S.Container>
      <S.Title>Usuários</S.Title>
      {users?.map((user) => <User key={user.id} id={user.id} />)}
    </S.Container>
  )
}
