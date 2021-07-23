import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello?</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React 1 Week hw
        </p>
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
