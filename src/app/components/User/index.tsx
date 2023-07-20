"use client";
import ButtonsMacOs from "../ButtonsMacOs";
import { CodeIcon } from "../../icons/CodeIcon";
import Image from "next/image";
import GitHubRepoList from "../GitHubRepoList";
import { UserData } from "@/app/types/UserData";
import {
  Card,
  CardContainer,
  CardText,
  CardTitle,
  GitInfo,
  TopContainer,
} from "./styled";

export interface UserProps {
  user: UserData;
}

const User = ({ user }: UserProps) => {
  return (
    <CardContainer>
      {user ? (
        <Card>
          <TopContainer>
            <ButtonsMacOs />
            <CodeIcon />
          </TopContainer>
          <Image
            src={user.avatar_url}
            alt="Avatar"
            width={100}
            height={100}
            style={{ borderRadius: "50%", border: "5px solid #E68602" }}
          />
          <CardTitle>{user.login}</CardTitle>
          <GitInfo>GitHub da(o) {user.name}</GitInfo>
          {user.company && <CardText>Trabalha no(a) {user.company}</CardText>}
          <CardText>Mora em {user.location}</CardText>
          {user.bio && <CardText>{user.bio}</CardText>}
          <GitHubRepoList username={user.login}></GitHubRepoList>
        </Card>
      ) : (
        <>
          <h1>Usuário não encontrado</h1>
        </>
      )}
    </CardContainer>
  );
};

export default User;
