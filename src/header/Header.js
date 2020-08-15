import React, { Component } from "react";
import CategoryContainer from "./container/CategoryContainer";
import SearchContainer from "./container/SearchContainer";
import LoginContainer from "./container/LoginContainer";
import { Image, Button } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

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
  textAlign: "center",
};

const headerLogo = {
  width: "150px",
  height: "50px",
};

@inject("Store")
class Header extends Component {
  // 페이지 이동 함수
  movePage = (e) => {
    const page = e.target.textContent;
    this.props.Store.page.moveToPage(page);
  };

  render() {
    return (
      <div>
        <div style={headerMain}>
          <CategoryContainer />
          <Image src="images/logo/logo.png" style={headerLogo} />
          <SearchContainer />
          <LoginContainer />
        </div>
        <div style={headerSub}>
          <Button.Group style={{ margin: "5px" }}>
            <Button onClick={this.movePage}>MAIN</Button>
            <Button onClick={this.movePage}>LIST</Button>
            <Button onClick={this.movePage}>DETAIL</Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default Header;
