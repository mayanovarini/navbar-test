import React from 'react';
import './App.css';
import navData from './navData.json';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar cities={navData.cities}/>
      </header>
    </div>
  );
}

export default App;
