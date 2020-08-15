import React, { Component } from "react";
import CategoryContainer from "./container/CategoryContainer";
import SearchContainer from "./container/SearchContainer";
import LoginContainer from "./container/LoginContainer";
import { Image, Grid } from "semantic-ui-react";

const headerMain = {
  margin: "2px",
  padding: "2px",
  marginTop: "-2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const headerSub = {
  background: "NAVY",
  height: "25px",
  textAlign: "center",
};

const headerLogo = {
  width: "150px",
  height: "50px",
};

class Header extends Component {
  render() {
    return (
      <div>
        <div style={headerMain}>
          <CategoryContainer />
          <Image src="images/logo/logo.png" style={headerLogo} />
          <SearchContainer />
          <LoginContainer />
        </div>
        <div style={headerSub}>Sub Header</div>
      </div>
    );
  }
}

export default Header;
