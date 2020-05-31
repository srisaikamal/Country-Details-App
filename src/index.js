import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Countries } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/country/:code" component={Countries} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
