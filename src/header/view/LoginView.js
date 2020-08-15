import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class LoginView extends Component {
  render() {
    return (
      <div>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </div>
    );
  }
}

export default LoginView;
