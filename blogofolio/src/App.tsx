import React from 'react';
import './App.scss';
import { Confirmation } from './components/Confirmation/Confirmation';
import { NavBar } from './components/NavBar/NavBar';
import { PostList } from './components/PostList/PostList';
import { SelectedPost } from './components/SelectedPost/SelectedPost';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { Success } from './components/Success/Success';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className='Main'>
        <div className='wrapper'>
          {/* <SignUp/> */}
          {/* <SignIn/> */}
          {/* <Success /> */}
          <Confirmation/>
          {/* <PostList/> */}
          {/* <SelectedPost /> */}
        </div>
      </main>
      <footer className='Footer'>
        <div className='footer-wrapper'>
          <p >©2023 Blogofolio</p>
          <p >All rights reserved</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
