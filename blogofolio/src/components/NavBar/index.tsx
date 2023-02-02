import { SearchBar } from '../SearchBar'
import { UserButton } from '../UserButton'
import styles from './NavBar.module.scss'
import { BurgerButton } from '../BurgerButton'

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <BurgerButton />
            <div className={styles.wrapper}>
                <SearchBar />
                <UserButton shortName='AM' fullName='Artem Murili' /></div>
        </nav>
    )
}