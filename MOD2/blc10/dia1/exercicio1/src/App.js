import './App.css';

const compromissos = ['Estudar','Derrubar vacilão','Catar as puta','Beber até cair','Repetir'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    compromissos.map((valor) => Task(valor))
  );
}

export default App;
