import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => (
  <Nav>
    <li>
      <StyledLink to="/home">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="/about">About</StyledLink>
    </li>
    <li>
      <StyledLink to="/contact">Contact</StyledLink>
    </li>
  </Nav>
);

export default Links;

const StyledLink = styled(Link)`
  color: mintcream;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: space-between;
`;
