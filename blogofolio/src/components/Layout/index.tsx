import React, { createContext, Dispatch, SetStateAction } from "react"
import { useCallback, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar"
import { BurgerMenu } from "../NavBar/BurgerMenu"


type ThemeColor = "light" | "dark";
interface IContext {
    themeColor: ThemeColor;
    setThemeColor: Dispatch<SetStateAction<ThemeColor>>;
}


export const ThemeContext = createContext<IContext>({} as IContext);

const Layout = () => {
    const [showLeftMenu, setShowLeftMenu] = useState(false)

    const showMenu = useCallback((showMenu: boolean) => {
        setShowLeftMenu(showMenu)
    }, [])


    const [themeColor, setThemeColor] = useState<ThemeColor>("light");

    const contextValue: IContext = {
        themeColor,
        setThemeColor,
    };
    return (
        <div className='App'>
            <header className="App-header">
                <NavBar onBurgerClick={showMenu} />
            </header>
            <ThemeContext.Provider value={contextValue}>
                <main className={`Main ${themeColor === 'light' ? 'light' : 'dark'}`}>
                    <BurgerMenu show={showLeftMenu} />
                    <div className='wrapper'>
                        <Outlet />
                    </div>
                </main>
                <footer className={`Footer ${themeColor === 'light' ? 'light' : 'dark'}`}>
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