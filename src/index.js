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

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  min-height: 100vh;

  @media only screen and (max-width: 1240px) {
    padding: 0 20px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
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
