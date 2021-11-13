import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import { AppContext } from './AppContext';
import { dayTheme } from './utils/themes.js';

import Home from "./pages/Home/Home";

export default function App() {
  const [ theme, setTheme ] = useState(dayTheme)
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={[`*`, `/`]}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

