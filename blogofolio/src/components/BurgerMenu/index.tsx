import styles from './BurgerMenu.module.scss'
import { UserButton } from '../UserButton'
import { LightBtn } from '../ThemeButtons/Light'
import { DarkBtn } from '../ThemeButtons/Dark'
import { NavLink } from 'react-router-dom'
import AsideMenuButton from '../AsideMenuButton'
import { useAuth } from '../hoc/AuthProvider'


interface IProps {
    show: boolean
}

export const BurgerMenu = (props: IProps) => {
    const { user } = useAuth();
    const { show } = props


    if (!show) {
        return null
    }

    return (
        <div className={styles.BurgerMenu}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <UserButton shortName={'AM'} fullName={'Artem Murili'} />
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