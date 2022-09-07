import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { User } from "../../components/User";
import { useDataResults } from "../../contexts/dataContext";

export function Home() {
  const users = useDataResults();

  return (
    <Container>
      <Title>Usuários</Title>
      {users?.map((user) => <User key={user.id} id={user.id} />)}
    </Container>
  )
}
