import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostList/>
      </header>
    </div>
  );
}

export default App;