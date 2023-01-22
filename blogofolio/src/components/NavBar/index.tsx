
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


    return (
        <nav className={styles.nav}>
            <BurgerButton onClick={props.onBurgerClick} />
            <div className={styles.wrapper}>
                <SearchBar />
                <SearchButton />
                <UserButton shortName='AM' fullName='Artem Murili' /></div>
        </nav>
    )
}