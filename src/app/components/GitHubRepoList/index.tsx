import React, { useState, useEffect } from "react";
import { List, AutoSizer, ListRowRenderer } from "react-virtualized";
import { Repositores } from "@/app/types/Repositories";
import {
  Container,
  Heading,
  ListContainer,
  ListItem,
  ListLink,
} from "./styled";
import { getRepositories } from "@/app/services/get-repositories";

interface GitHubRepoListProps {
  username: string;
}

const GitHubRepoList = ({ username }: GitHubRepoListProps) => {
  const [repositories, setRepositories] = useState<Repositores[] | null>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const [data, error] = await getRepositories(username);

      if (error) {
        alert("Ocorreu um erro ao buscar os repositórios");
        return;
      }

      setRepositories(data);
    };

    fetchRepositories();
  }, [username]);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const repo = repositories && repositories[index];

    return (
      <ListItem key={key} style={style}>
        {repo && (
          <ListLink
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
          </ListLink>
        )}
      </ListItem>
    );
  };

  return (
    <Container>
      <Heading>Repositórios do GitHub</Heading>
      {repositories && repositories.length !== 0 && (
        <ListContainer>
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                rowHeight={40}
                rowCount={repositories.length}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        </ListContainer>
      )}
    </Container>
  );
};

export default GitHubRepoList;
