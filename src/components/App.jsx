import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

import TopBar from "./TopBar";

import HomePage from "./content/Home";
import AboutPage from "./content/About";
import ContactPage from "./content/Contact";
import Links from "./content/Links";
import { useRouter } from "../useRouter";

const App = () => {
  const { homeRef, aboutRef, contactRef } = useRouter();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Wrapper>
        <TopBar>
          <Links />
        </TopBar>
        <div ref={homeRef}>
          <HomePage />
        </div>
        <div ref={aboutRef}>
          <AboutPage />
        </div>
        <div ref={contactRef}>
          <ContactPage />
        </div>
      </Wrapper>
    </>
  );
};
export default App;

const Wrapper = styled.div`
  background: lightskyblue;
  /* padding: 3rem 7.5rem; */
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  border: red 2px solid;
  /* height: 300vh; */
  margin-top: 8rem;
`;
