import { styled } from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3182ce;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4299e1;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }

  &:active {
    background-color: #2c5282;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background-color: #3dc47e;
  height: 100%;
  width: 500px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  background-color: #ccc;
  align-items: center;
  border-radius: 1.5rem;
`;

export const BodyGitHub = styled.div``;

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  background-color: #ccc;
  color: #3182ce;
  margin-right: 1rem;
`;
