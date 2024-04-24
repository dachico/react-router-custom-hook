import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Box>
      <Title>Home is where the heart is :)</Title>
    </Box>
  );
};

export default Home;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: tomato;
  width: 95vw;
`;
const Title = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: mintcream;
`;
