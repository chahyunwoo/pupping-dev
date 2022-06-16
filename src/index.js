import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/scss/main.scss";

import Index from "./views/Index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
