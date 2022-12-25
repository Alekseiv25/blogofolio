import { BurgerButton } from "./Burger-menu/BurgerButton"
import { SearchBar } from "./Search-bar/SearchBar"
import { SearchButton } from "./Search-button/SearchButton"
import { NameBtnWrapper } from "./NameBtnWrapper/NameBtnWrapper"
import styles from './NavBar.module.scss'

export const NavBar = () => {
    return (<nav className={styles.nav}>
        < BurgerButton />
        <SearchBar />
        <SearchButton />
        <NameBtnWrapper shortName='AM' fullName='Artem Kurilik' />
    </nav>
    )
}