import React from "react";
import { CloseButton, Container, ExpandButton, MinimizeButton } from "./styled";

const ButtonsMacOs = () => {
  return (
    <Container>
      <CloseButton></CloseButton>
      <MinimizeButton></MinimizeButton>
      <ExpandButton></ExpandButton>
    </Container>
  );
};

export default ButtonsMacOs;
