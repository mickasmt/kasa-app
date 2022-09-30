import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import House from "./pages/House";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

import styled, { createGlobalStyle } from "styled-components";

import ScrollToTop from "./utils/ScrollToTop";
import colors from "./utils/style/colors";
import screens from "./utils/style/screens";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    /* background-color: ${colors.backgroundLight}; */
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 20px;
  
  @media ${screens.desktop} {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1240px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<House />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  </React.StrictMode>
);
