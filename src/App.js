import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import AppContextProvider from "./context/AppContext";
import Menu from "./components/Menu";
import Display from "./components/Display";
import BasicCalculator from "./components/BasicCalculator";
//style
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Menu />
          <Display />
          <Switch>
            <Route exact path="/" component={BasicCalculator} />
          </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
