import { styled } from "styled-components";

export const CardContainer = styled.div`
  background-color: #4cb9fc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 2rem;
`;

export const Card = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const GitInfo = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ListContainer = styled.div`
  margin-top: 1rem;
`;

export const ListTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
`;

export const ListLink = styled.a`
  text-decoration: none;
  color: #3182ce;

  &:hover {
    text-decoration: underline;
  }
`;
