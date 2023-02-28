import logo from './logo.svg';
import './App.css';
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://particles.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          tsParticles
        </a> */}
        <img src={logo2} alt=""  />
      </header>
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
