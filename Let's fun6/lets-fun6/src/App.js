import logo from './logo.svg';
import './App.css';
import ListaNomes from './components/ListaNomes';

function App() {
  const nomes = ['Bernardo', 'Ronaldo', 'Marina', 'Enzo', 'Artur', 'Christian']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Lista de Nomes</h1>
          <ListaNomes nomes ={nomes}/>
        </div>
      </header>
    </div>
  );
}

export default App;
