import React from 'react';
import Header from './Components/Header/Header';
import Clock from './Components/Clock/Clock';
import './App.css';

// A basic digital clock that displays the current date and time, and a toggle switch to toggle date on and off.

function App() {
  return (
    <div className="App">
      <Header/>
      <Clock/>
    </div>
  );
}

export default App;
