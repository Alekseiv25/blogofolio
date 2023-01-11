import React from 'react';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className='Main'></main>
      <footer className='Footer'>
        <div className='Wrapper'>
          <p >©2023 Blogofolio</p>
          <p >All rights reserved</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
