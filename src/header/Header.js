import React, { Component } from "react";
import CategoryContainer from "./container/CategoryContainer";
import SearchContainer from "./container/SearchContainer";
import LoginContainer from "./container/LoginContainer";
import { Image } from "semantic-ui-react";
import { inject } from "mobx-react";

const header = {
  marginTop: "-2px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

const headerLogo = {
  width: "200px",
  height: "70px",
  marginLeft: "-8px",
};

const headerMain = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "80px",
};

@inject("Store")
class Header extends Component {
  render() {
    return (
      <div style={header}>
        <CategoryContainer />
        <div style={{ width: "100%" }}>
          <div className="headerMain" style={headerMain}>
            <Image src="images/logo/logo.png" style={headerLogo} href="/" />
            <SearchContainer />
            <LoginContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
