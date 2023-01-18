
import { SearchBar } from './SearchBar'
import { UserButton } from './UserButton'
import styles from './NavBar.module.scss'
import { BurgerButton } from './BurgerMenu/BurgerButton'
import { SearchButton } from './SearchBar/SearchButton'
import { useCallback, useState } from 'react'
interface IProps {
    onBurgerClick: (showMenu: boolean) => void
}
export const NavBar = (props: IProps) => {
    const [showSearchInput, setShowSearchInput] = useState(false)

    const showInput = useCallback((showSearchInput: boolean) => {
        setShowSearchInput(showSearchInput)
    }, [showSearchInput])

    return (
        <nav className={styles.nav}>
            <BurgerButton onClick={props.onBurgerClick} />

            <div className={styles.wrapper}>
                <SearchBar show={showSearchInput} />
                <SearchButton onClick={showInput} />
                <UserButton shortName='AM' fullName='Artem Murili' /></div>
        </nav>
    )
}