import styles from './BurgerMenu.module.scss'
import { UserButton } from '../Buttons/UserButton'
import { LightBtn } from '../Buttons/ThemeButtons/Light'
import { DarkBtn } from '../Buttons/ThemeButtons/Dark'
import { NavLink } from 'react-router-dom'
import AsideMenuButton from '../Buttons/LogInLogOutButton'
import { AppState } from '../../store/store'
import { useSelector } from 'react-redux'


const userSelector = (state: AppState) => state.auth.user
const getBurgerStateSelector = (state: AppState) => state.burger

export const BurgerMenu = () => {
    const user = useSelector(userSelector)
    const burgerState = useSelector(getBurgerStateSelector)

    return (
        <div className={burgerState.isOpen ? `${styles.BurgerMenu} ${styles.active1}` : `${styles.BurgerMenu}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    {!user ? null : <UserButton />}

                </div>
                <ul className={styles.ul}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addPost'>Add Post</NavLink></li>
                </ul>
                <div className={styles.ThemeWrapper}>
                    <div className={styles.DayWrapper}>
                        <LightBtn />
                    </div>
                    <div className={styles.NightWrapper}>
                        <DarkBtn />
                    </div>

                </div>
                <div className={styles.LogOut}>
                    {user ? (
                        <AsideMenuButton value="Log out" />
                    ) : (
                        <AsideMenuButton value="Log in" navigationAdress="signin" />
                    )}
                </div>
            </div>



        </div>
    )
}