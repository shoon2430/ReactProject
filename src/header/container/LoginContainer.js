import React, { Component } from "react";
import LoginView from "../view/LoginView";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class LoginContainer extends Component {
  render() {
    const { user } = this.props.Store;
    const loginUser = user.getLoginUser;

    return <LoginView login={loginUser} />;
  }
}

export default LoginContainer;
