import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import styles from './css/App.css'; // css module화

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <h1>Hello?</h1>
        <img src={logo} className={styles['App-logo']} alt="logo" />
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
