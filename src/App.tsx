import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import ScrollToTop from "./components/ScrollToTop";
import Snackbar from "./components/Snackbar/Snackbar";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Resume from "./containers/Resume/Resume";

const App: React.FC = () => {
  return (
    <ScrollToTop>
      <Page>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Page>
      <Navbar />
      <Snackbar />
    </ScrollToTop>
  );
};

export default App;
