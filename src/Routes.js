import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const { REACT_APP_RESUME_URL } = process.env;

export default function Routes() {
  return (
    <Switch>
      <Route exact path={[`/`, `/home`]}>
        <Home />
      </Route>
      <Route exact path={[`/portfolio`, "*"]}>
        <Portfolio />
      </Route>
      <Route
        exact
        path={`/resume`}
        component={() => {
          window.location.href = { REACT_APP_RESUME_URL };
          return null;
        }}
      />
    </Switch>
  );
}
