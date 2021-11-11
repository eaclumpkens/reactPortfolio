import React from "react";
import {  BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

import Routes from './Routes.js';
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {

  return (
    <Router>
      <div>
        <Container className="app-container" fluid>
          <Menu/>
          <Routes/>
          <Footer/>
        </Container>
      </div>
    </Router>
  );
}

export default App;


