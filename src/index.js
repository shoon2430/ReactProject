import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

import CommonStore from "./stores/common";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider Store={new CommonStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
