import React from "react";
import "./App.css";

function escreve(event) {
  return console.log(event.target.innerText);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={escreve}>Clica nessa Pleura!</button>
        <button onClick={escreve}>E nessa aqui</button>
        <button onClick={escreve}>Nessa pleura também!</button>
      </div>
    );
  }
}

export default App;
