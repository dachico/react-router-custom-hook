import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Box>
      <Title>About everything that matters</Title>;
    </Box>
  );
};

export default About;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: limegreen;
  width: 95vw;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: mintcream;
`;
