import React from "react";
import "./App.css";

export default class App extends React.Component {

  constructor() {
    super()
    this.escreve = this.escreve.bind(this)
  }

  escreve(event) {
    return console.log(event.target.innerText);
  }

  render() {
    return (
      <div>
        <button onClick={this.escreve}>Clica nessa Pleura!</button>
        <button onClick={this.escreve}>E nessa aqui</button>
        <button onClick={this.escreve}>Nessa pleura também!</button>
      </div>
    );
  }
}

// export default App;
