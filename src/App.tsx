import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import Home from "./containers/Home/Home";

const App: React.FC = () => {
  return (
    <div>
      <Page>
        <Home />
      </Page>
      <Navbar />
    </div>
  );
};

export default App;
