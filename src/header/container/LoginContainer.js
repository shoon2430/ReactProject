import React, { Component } from "react";
import LoginView from "../view/LoginView";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class LoginContainer extends Component {
  render() {
    const { user } = this.props.Store;
    console.log(user);
    const loginUser = user.getLoginUser;
    console.log(loginUser);
    return <LoginView login={loginUser} />;
  }
}

export default LoginContainer;
