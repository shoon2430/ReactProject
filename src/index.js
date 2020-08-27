import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

import CommonStore from "./stores/common";
import { Provider } from "mobx-react";
import Login from "./user/login";
import SignUp from "./user/SignUp";

import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "path/to/.env") });

ReactDOM.render(
  <BrowserRouter basename={`${process.env.REACT_APP_BASE_URL}`}>
    <Provider Store={new CommonStore()}>
      <Route path="/login" component={Login} exact={true} />
      <Route path="/signup" component={SignUp} exact={true} />
      <Route
        path={["/", "/detail", "/list", "/myMonpang", "/basket", "/qna"]}
        component={App}
        exact={true}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
