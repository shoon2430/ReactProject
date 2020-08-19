import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const SignUp = inject("Store")(
  observer(({ history, Store }) => {
    const [id, setId] = useState(null);
    const [pass1, setPass1] = useState(null);
    const [pass2, setPass2] = useState(null);
    const [name, setName] = useState(null);

    const goBack = () => {
      history.goBack();
    };

    const onChangeId = (e) => {
      setId(e.target.value);
    };
    const onChangePass1 = (e) => {
      setPass1(e.target.value);
    };

    const onChangePass2 = (e) => {
      setPass2(e.target.value);
    };
    const onChangeName = (e) => {
      setName(e.target.value);
    };

    const validCheck = () => {
      let message = null;
      message =
        String(pass1) !== String(pass2)
          ? "비밀번호가 동일하지 않습니다."
          : null;

      if (message) {
        alert(message);
        return false;
      }
      return true;
    };

    const signUp = () => {
      if (validCheck()) {
        Store.user.signUp(id, pass1, name);
        alert("회원가입 성공");
        window.location = "/login";
      }
    };

    console.log(Store.user);
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            <Image
              src="images/logo/logo.png"
              style={{ width: "150px", height: "50px" }}
            />{" "}
            Sign Up Page
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="ID"
                onChange={onChangeId}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChangePass1}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChangePass2}
              />
              <Form.Input
                fluid
                iconPosition="left"
                placeholder="name"
                onChange={onChangeName}
              />

              <Button color="orange" fluid size="large" onClick={signUp}>
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message onClick={goBack}>뒤로가기</Message>
        </Grid.Column>
      </Grid>
    );
  })
);

export default SignUp;
