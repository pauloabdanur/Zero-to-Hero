import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Root = styled.div([], {
  width: "50vw",
  height: "90vh"
});

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const GitHubUrl = styled.span`
  font-size: 30px;
  color: #25d7fd;
  ${space}
`;

const GitHubImage = styled.img`
  max-width: 800px;
`;

export const Figma = () => (
  <Root>
    <Center>
      <Title mb={30}>Figma</Title>
      <GitHubImage src={"./img/Figma.png"} />
    </Center>
  </Root>
);
