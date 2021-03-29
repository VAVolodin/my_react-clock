// import logo from './react_logo.svg';
import './App.css';
import Clock2 from './Components/Clock/Clock2';
import Creature from './Components/Creature/Creature';
// import Clock from './Components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Creature />
          <Clock2 />
        
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
