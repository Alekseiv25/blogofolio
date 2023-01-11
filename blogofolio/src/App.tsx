import React from 'react';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {/* <main className={bgState === 'light' ? style.lightBackground : style.darkBackground}>

      </main> */}
    </div>
  );
}

export default App;
