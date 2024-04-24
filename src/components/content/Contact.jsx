import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Box>
      <Title>Maintain eye contact at all times!</Title>;
    </Box>
  );
};

export default Contact;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: deeppink;
  width: 95vw;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: mintcream;
`;
