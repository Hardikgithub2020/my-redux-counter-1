import React from 'react';
import logo from './logo.svg';
import './App.css';

import ShowResult from './components/ShowResult';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShowResult />
        <UserInput />
      </header>
    </div>
  );
}

export default App;
