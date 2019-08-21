import React from "react";
import styled from "styled-components";
import { space, width } from "styled-system";

import { Root } from "./Intro";

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  margin-top: 20px;
  font-size: 20px;
  color: #fdaa4c;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #25d7fd;
  ${space}
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={"./img/zerotohero.png"} width={330} />
      <Title mt={60}>My journey at Foton</Title>
      <MeName mt={80}>Paulo Abdanur</MeName>
      {/* <Subtitle>github.com/pauloike</Subtitle> */}
    </Center>
  </Root>
);
