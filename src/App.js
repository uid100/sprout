import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import React from 'react';
import CardList from './components/CardList';
import TodaysDate from './components/TodaysDate';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Save to reload.
        </p>
      </header>
      */}
      <div>
        <TodaysDate />
        <CardList />
        {/* <TodoList /> */}
      </div>
    </div>
  );
}

export default App;
