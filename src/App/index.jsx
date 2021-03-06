import React, { Component } from "react";
import { NavBar } from "components/organisms";
import { Display } from "styles";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Display>
        <NavBar />
        <Routes />
      </Display>
    );
  }
}

export default App;
