import logo from './logo.svg';
import './App.css';
import Greet from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <Greet name='Test'>
          Blah blah
        </Greet>
        <Welcome />
      </header>
    </div>
  );
}

export default App;
