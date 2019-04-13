import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Products from ".bin/teto/src/components/Products";
import SQL from ".bin/teto/src/components/SQL";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  //   <App />,
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="/home" component={App} />
    <Route path="/products" component={Products} />
    <Route path="/sql" component={SQL} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
