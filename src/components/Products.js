import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProdutos: []
    };
  }

  componentDidMount() {
    //Simulate AJAX response
    var response = [
      {
        code: 1,
        description: "Mesa",
        price: 550.0,
        suppliers: ["Enterprise A", "Supply B"]
      },
      {
        code: 2,
        description: "Cadeira",
        price: 80.0,
        suppliers: ["Enterprise D", "Supply A"]
      },
      {
        code: 3,
        description: "Mesa",
        price: 450.0,
        suppliers: ["Enterprise A", "Supply C"]
      },
      {
        code: 4,
        description: "Sofá",
        price: 1050.0,
        suppliers: ["Enterprise A", "Supply A"]
      },
      {
        code: 5,
        description: "Mesa",
        price: 450.0,
        suppliers: ["Enterprise A", "Supply C"]
      },
      {
        code: 6,
        description: "Sofá",
        price: 1050.0,
        suppliers: ["Enterprise A", "Supply A"]
      },
      {
        code: 7,
        description: "Cama",
        price: 800.0,
        suppliers: ["Enterprise B", "Supply C"]
      }
    ];

    var filteredList = response.filter(function(f) {
      return f.price > 100.0;
    });

    this.setState({ listaProdutos: filteredList });
  }

  render() {
    return (
      <div>
        <h1>Consulta de Produtos com preço maior que R$100</h1>
        <table id="tabelaProdutos" border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Fornecedores</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listaProdutos.map(function(p) {
              return (
                <tr key={p.code}>
                  <td>{p.code}</td>
                  <td>{p.description}</td>
                  <td>R${p.price}</td>
                  <td>{p.suppliers.join(", ")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
