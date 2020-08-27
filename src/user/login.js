import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Login = inject("Store")(
  observer(({ Store }) => {
    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);

    const onChangeId = (e) => {
      setId(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };

    const validCheck = () => {
      const userList = Store.user.getUsers;
      const checked = userList.find(
        (user) => user.id === id && String(user.password) === String(password)
      );

      if (checked) {
        return true;
      } else {
        alert("아이디 또는 비밀번호를 확인해주세요");
        setPassword(null);
        return false;
      }
    };

    const login = () => {
      if (validCheck()) {
        Store.user.login(id);
        window.location = "/";
      }
    };

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            <Image
              as={Link}
              to="/"
              src="images/logo/logo.png"
              style={{ width: "150px", height: "50px" }}
            />{" "}
            Login to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Login ID"
                onChange={onChangeId}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChangePassword}
              />

              <Button color="orange" fluid size="large" onClick={login}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to={`/signup`}>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  })
);

export default Login;
