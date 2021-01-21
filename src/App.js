import React from "react";
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Container } from "react-bootstrap";
import Style from "../src/assets/Style";

function App() {

  return (
    <Router>
    <div>
      <Container fluid style={ Style.appContainer }>
        <Nav />
        <Switch>
            <Route exact path= {["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path= "/portfolio">
              <Portfolio />
            </Route>
            <Route exact path= "/resume" component={ () => {
              window.location.href = 'https://drive.google.com/file/d/1nFf0nSYoyxPWD3SqKUMFnMGjnz9ly5lt/view?usp=sharing';
              return null;
            }}/>
          </Switch>
          <Footer />
        </Container>
    </div>
    </Router>
  );
}

export default App;


