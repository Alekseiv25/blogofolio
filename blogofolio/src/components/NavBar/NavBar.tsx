
import { SearchBar } from './SearchBar/SearchBar'
import { UserButton } from './UserButton/UserButton'
import styles from './NavBar.module.scss'
import { BurgerMenu } from './BurgerMenu/BurgerMenu'
import { BurgerButton } from './BurgerMenu/BurgerButton/BurgerButton'
import { useState } from 'react'

export const NavBar = () => {
    const [menuActive, setMenuActive] = useState(true)
    const setMenu = () => { setMenuActive(prev => !prev) }
    return (<>
        <nav className={styles.nav}>
            <BurgerButton activeBurger={setMenu} />
            <div className={styles.wrapper}>
                <SearchBar />
                <UserButton shortName='AM' fullName='Artem Kurilik' /></div>
        </nav>
        <div className={`${menuActive ? `${styles.active}` : ''}`}>
            <BurgerMenu />
        </div>
    </>
    )
}