import React, { useCallback, useState } from 'react';
import './App.scss';
import { Confirmation } from '../Confirmation';
import { BurgerMenu } from '../NavBar/BurgerMenu';
import { NavBar } from '../NavBar';
import { PostList } from '../PostList';
import { SelectedPost } from '../SelectedPost';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { Success } from '../Success';

function App() {
  const [showLeftMenu, setShowLeftMenu] = useState(false)

  const showMenu = useCallback((showMenu: boolean) => {
    setShowLeftMenu(showMenu)
  }, [showLeftMenu])

  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar onBurgerClick={showMenu} />
      </header>
      <main className='Main'>
        <BurgerMenu show={showLeftMenu} />
        <div className='wrapper'>
          {/* <SignUp/> */}
          {/* <SignIn/> */}
          {/* <Success /> */}
          {/* <Confirmation email={'example@gmail.com'} /> */}
          <PostList/>
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
