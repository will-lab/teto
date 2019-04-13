import React, { Component } from "react";
import Products from "./components/Products";
import SQL from "./components/SQL";

import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="topnav">
            <a href="/">Home</a>
            <a href="/products">Produtos</a>
            <a href="/sql">SQL</a>
          </div>
        </header>
        <div>
          <h1>Teste ReactJS e SQL</h1>
          <p>Autor: Willian Nascimento Serrano</p>
          <p>E-mail: will.serrano.job@gmail.com</p>
        </div>
        <div className="content">
          {this.props.children}
          {/* <Products /> */}
          {/* <SQL /> */}
        </div>
      </div>
    );
  }
}

export default App;
