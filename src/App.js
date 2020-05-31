import React, { Component } from "react";
import { Api } from "./Components";
import "./sass/main.scss";
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Api />
      </div>
    );
  }
}
export default App;
