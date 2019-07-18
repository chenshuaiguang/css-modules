import React from 'react';
import logo from './logo.svg';
import style from './App.css';
import Demo1 from './demo1/demo1'
function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={style.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Demo1 />
      </header>
    </div>
  );
}

export default App;
