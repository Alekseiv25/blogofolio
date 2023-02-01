import { useCallback, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar"
import { BurgerMenu } from "../BurgerMenu"
import Modal from "../Modal"
import { useSelector } from "react-redux"


const Layout = () => {
    const [showLeftMenu, setShowLeftMenu] = useState(false)

    const showMenu = useCallback((showMenu: boolean) => {
        setShowLeftMenu(showMenu)
    }, [])


    const theme = useSelector((state: any) => state.theme)

    return (
        <div className='App'>
            <header className="App-header">
                <NavBar onBurgerClick={showMenu} />
            </header>
            <main className='Main' style={theme}>
                <BurgerMenu show={showLeftMenu} />
                <div className='wrapper'>
                    <Outlet />
                    <Modal />
                </div>
            </main>
            <footer className='Footer' style={theme}>
                <div className='footer-wrapper'>
                    <p >©2023 Blogofolio</p>
                    <p >All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}






export default Layout