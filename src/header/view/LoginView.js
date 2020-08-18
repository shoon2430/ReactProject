import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

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
    const { login } = this.props;
    return (
      <div style={headerIconBox}>
        <Link style={iconLabel} to="/my">
          {login !== null && <Icon name="user" size="big" />}
          {login !== null && (
            <p style={{ fontSize: "12px", marginTop: "3px" }}>마이몬팡</p>
          )}
        </Link>
        <Link style={iconLabel} to="/basket">
          <Icon name="shop" size="big" />
          <p style={{ fontSize: "12px", marginTop: "3px" }}>장바구니</p>
        </Link>
      </div>
    );
  }
}

export default LoginView;
