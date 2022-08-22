import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Gaikko Alves'
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
