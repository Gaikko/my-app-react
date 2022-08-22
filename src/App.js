import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import PessoaStructure from './components/PessoaStructure';

function App() {
  const name = 'Gaikko Alves'
  const idade = 31
  const profissao = "DEV"
  const foto = 'https://via.placeholder.com/150'
  const url = 'https://via.placeholder.com/150'

  function sum(a, b) {
    return a + b;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <hr></hr>
          Gaikko
          <ul>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <button>Clique!</button>
          </ul>
        </p>
        <p>Olá, {name}</p>
        <p>Soma: {sum(2, 8)}</p>
        <img src={url} alt='Minha Imagem'></img>
        <HelloWord/>
        <SayMyName nome="Gaikko"/>
        <SayMyName nome={name}/>
        <hr></hr><br></br>
        <Pessoa nome="Elisa" idade="4" profissao="Nenem" foto="https://via.placeholder.com/150"/>
        <hr></hr>
        <br></br>
        <PessoaStructure name={name} idade={idade} profissao={profissao} foto={foto}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
