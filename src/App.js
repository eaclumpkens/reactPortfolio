import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import { AppContext } from './utils/AppContext';
import { dayTheme, nightTheme } from './utils/themes.js';

import Home from "./pages/Home/Home";

export default function App() {
  const ctx = useContext(AppContext);
  const [ theme, setTheme ] = useState('day')

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={ theme === 'day' ? dayTheme : nightTheme }>
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

