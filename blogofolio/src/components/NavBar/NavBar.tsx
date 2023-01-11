
import { SearchBar } from './SearchBar/SearchBar'
import { UserButton } from './UserButton/UserButton'
import styles from './NavBar.module.scss'
import { BurgerMenu } from './BurgerMenu/BurgerMenu'
import { BurgerButton } from './BurgerMenu/BurgerButton/BurgerButton'

export const NavBar = () => {

    return (<><nav className={styles.nav}>

        <BurgerButton />
        <div className={styles.wrapper}>
            <SearchBar />
            <UserButton shortName='AM' fullName='Artem Kurilik' /></div>
    </nav>
        <BurgerMenu /></>
    )
}