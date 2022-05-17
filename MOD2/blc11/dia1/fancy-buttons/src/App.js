import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.escreve = this.escreve.bind(this);
    this.state = {
      pBotao: 0,
      sBotao: 0,
      tBotao: 0,
    };
  }

  escreve(event) {
    if (event.target.id === 'bt1') this.setState((anterior, _props) => ({ pBotao: anterior.pBotao + 1 }));
    if (event.target.id === 'bt2') this.setState((anterior, _props) => ({ sBotao: anterior.sBotao + 1 }));
    if (event.target.id === 'bt3') this.setState((anterior, _props) => ({ tBotao: anterior.tBotao + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.escreve} id="bt1">
          {this.state.pBotao}
        </button>
        <button onClick={this.escreve} id="bt2">
          {this.state.sBotao}
        </button>
        <button onClick={this.escreve} id="bt3">
          {this.state.tBotao}
        </button>
      </div>
    );
  }
}

// export default App;
