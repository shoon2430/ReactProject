import React, { Component } from "react";
import { Label, Icon, Menu } from "semantic-ui-react";

const headerIconBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5px",
  marginLeft: "20px",
};

const iconLabel = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
};

class LoginView extends Component {
  render() {
    return (
      <div style={headerIconBox}>
        <div style={iconLabel}>
          <Icon name="user" size="big" />
          <p style={{ fontSize: "12px", marginTop: "3px" }}>마이몬팡</p>
        </div>
        <div style={iconLabel}>
          <Icon name="shop" size="big" />
          <p style={{ fontSize: "12px", marginTop: "3px" }}>장바구니</p>
        </div>
      </div>
    );
  }
}

export default LoginView;
