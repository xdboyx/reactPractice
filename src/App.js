import logo from './logo.svg';
import './App.css';
import TestDiv from './component/testDiv'
import Page1 from './component/Page1/Page1'
import './component/Home/Home'
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <TestDiv></TestDiv>
        <Page1></Page1>
      </header> */}
      
      <Home></Home>
    </div>
  );
}

export default App;
