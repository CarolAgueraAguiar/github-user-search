import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ListContainer = styled.div`
  height: 400px;
  margin-top: 1rem;
`;

export const ListItem = styled.div`
  padding: 0.5rem;
`;

export const ListLink = styled.a`
  text-decoration: none;
  color: #343b80;
  font-weight: 600;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;
