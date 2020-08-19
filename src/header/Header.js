import React, { Component } from "react";
import CategoryContainer from "./container/CategoryContainer";
import SearchContainer from "./container/SearchContainer";
import LoginContainer from "./container/LoginContainer";
import { Image, Label } from "semantic-ui-react";
import { inject } from "mobx-react";

const header = {
  marginTop: "-2px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

const headerSub = {
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
          {/* 임시로 페이지가 넘어가는 기능을 확인 할 수있도록 추가했습니다. */}
          {/* <div className="headerSub" style={headerSub}>
            <Label color="orange" horizontal href="/">
              MAIN
            </Label>
            <Label color="olive" horizontal href="/list">
              LIST
            </Label>
            <Label color="grey" horizontal href="/detail">
              DETAIL
            </Label>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
