import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar"
import { BurgerMenu } from "../BurgerMenu"
import Modal from "../Modal"
import { useSelector } from "react-redux"


const Layout = () => {
    const theme = useSelector((state: any) => state.theme)

    return (
        <div className='App'>
            <header className="App-header">
                <NavBar />
            </header>
            <main className='Main' style={theme}>
                <BurgerMenu />
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