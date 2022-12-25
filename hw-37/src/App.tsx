import React from 'react';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Tabs } from './components/Tabs/Tabs';
import { Title } from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Title text='Sign in' />
        <Tabs/>
      </main>
    </div>
  );
}

export default App;
