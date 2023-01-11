import { BurgerButton } from './BurgerMenu/BurgerMenu'
import { SearchBar } from './SearchBar/SearchBar'
import { UserButton } from './UserButton/UserButton'
import styles from './NavBar.module.scss'

export const NavBar = () => {
    return (<nav className={styles.nav}>
        < BurgerButton />

        <div className={styles.wrapper}>
            <SearchBar />
            <UserButton shortName='AM' fullName='Artem Kurilik' /></div>
    </nav>
    )
}