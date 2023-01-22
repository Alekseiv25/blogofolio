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
import { Search } from '../Search';

type ThemeType = {
  active: 'light' | 'dark'
}

const theme: ThemeType = {
  active: 'light' 
}

type ContextType = [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>]
export const ThemeContext = React.createContext<ContextType>([{}, {}] as ContextType)



function App() {
  const [showLeftMenu, setShowLeftMenu] = useState(false)

  const showMenu = useCallback((showMenu: boolean) => {
    setShowLeftMenu(showMenu)
  }, [showLeftMenu])

 
  const [state, setState] = useState(theme)

  return (
    <div className='App'>
      <header className="App-header">
        <NavBar onBurgerClick={showMenu} />
      </header>
      <ThemeContext.Provider value={[state, setState]}>
      <main className={`Main ${state.active}`}>
        <BurgerMenu show={showLeftMenu} />
        <div className='wrapper'>
          {/* <SignUp/> */}
          <Search/>
          {/* <SignIn/> */}
          {/* <Success /> */}
          {/* <Confirmation email={'example@gmail.com'} /> */}
          {/* <PostList/> */}
          {/* <SelectedPost /> */}
        </div>
      </main>

      <footer className={`Footer ${state.active}`}>
        <div className='footer-wrapper'>
          <p >©2023 Blogofolio</p>
          <p >All rights reserved</p>
        </div>
      </footer>
      </ThemeContext.Provider>
    </div>


  );
}

export default App;
