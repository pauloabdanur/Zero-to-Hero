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

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Space = styled.div`
  width: 20px;
`;

const Image = styled.img`
  max-width: 800px;
`;

export const Structure = () => (
  <Root>
    <Center>
      <Title mb={30}>Code Structure</Title>
      <ImageWrapper>
        <Image src={"./img/structure1.png"} />
        <Space />
        <Image src={"./img/structure2.png"} />
      </ImageWrapper>
    </Center>
  </Root>
);
