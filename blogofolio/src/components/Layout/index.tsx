import React from "react"
import { useCallback, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar"
import { BurgerMenu } from "../NavBar/BurgerMenu"
type ThemeType = {
    active: 'light' | 'dark'
}

const theme: ThemeType = {
    active: 'light'
}

type ContextType = [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>]
export const ThemeContext = React.createContext<ContextType>([{}, {}] as ContextType)

const Layout = () => {
    const [showLeftMenu, setShowLeftMenu] = useState(false)

    const showMenu = useCallback((showMenu: boolean) => {
        setShowLeftMenu(showMenu)
    }, [])


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
                        <Outlet />
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
    )
}






export default Layout