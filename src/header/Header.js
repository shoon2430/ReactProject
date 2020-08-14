import React, { Component } from "react";
import SearchContainer from "./container/SearchContainer";

class Header extends Component {
  render() {
    return (
      <header>
        <SearchContainer />
        <search>1</search>
        <login>2</login>
      </header>
    );
  }
}

export default Header;
