
import { SearchBar } from './SearchBar/SearchBar'
import { UserButton } from './UserButton/UserButton'
import styles from './NavBar.module.scss'
import { BurgerButton } from './BurgerMenu/BurgerButton/BurgerButton'
interface IProps {
    onBurgerClick: (showMenu: boolean) => void
}
export const NavBar = (props: IProps) => {

    return (
        <nav className={styles.nav}>
            <BurgerButton onClick={props.onBurgerClick} />
            <div className={styles.wrapper}>
                <SearchBar />
                <UserButton shortName='AM' fullName='Artem Kurilik' /></div>
        </nav>
    )
}