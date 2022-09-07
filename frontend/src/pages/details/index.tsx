import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { useDataResults } from "../../contexts/dataContext";
import * as S from "./styles";

export function Details() {
  const users = useDataResults();
  const { user } = useParams();

  const userDetails = user ? users?.[+user] : undefined
  const genderIdentify = userDetails?.gender.toUpperCase() === 'M' ? 'do' : 'da'
  const firstName = userDetails?.name.split(' ')[0]

  return (
    <S.Container>
      <S.Title>Detalhes {genderIdentify} {firstName}</S.Title>
      {userDetails && <Card name={userDetails.name} age={userDetails.age} gender={userDetails.gender} />}
      <Button path="/" label="voltar" />
    </S.Container>
  )
}
