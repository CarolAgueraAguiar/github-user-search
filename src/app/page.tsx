"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  BodyGitHub,
  Button,
  Container,
  Form,
  HeaderIcon,
  Heading,
  Input,
} from "./styles/styled";
import { GitHubIcon } from "./icons/GitHubIcon";
import User from "./components/User";
import { UserData } from "./types/UserData";
import { getUser } from "./services/get-user";

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [data, error] = await getUser(username);

    if (error) {
      return alert("Usuário não encontrado");
    }

    setUserData(data);
  };

  return (
    <Container>
      <HeaderIcon>
        <GitHubIcon />
      </HeaderIcon>
      <BodyGitHub>
        <Heading>Informações de usuários do GitHub</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Coloque seu nome de usuário do GitHub"
            value={username}
            onChange={handleInputChange}
          />
          <Button type="submit">Buscar</Button>
        </Form>
      </BodyGitHub>
      {userData && <User user={userData} />}
    </Container>
  );
}
