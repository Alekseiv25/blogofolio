import styles from './BurgerMenu.module.scss'
import { UserButton } from '../UserButton/UserButton'
import { useState } from 'react'
import { LightBtn } from './ThemeButtons/Light/LightButton'
import { DarkBtn } from './ThemeButtons/Dark/DarkButton'
// import { useState } from 'react'

export const BurgerMenu = () => {
    const [bgState, setBgState] = useState<'light' | 'dark'>('dark')
    const changeColorTheme = (style: 'light' | 'dark') => {
        setBgState(style)
    }
    return (
        <div className={styles.BurgerMenu}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <UserButton shortName={'AM'} fullName={'Artem Kurilik'} />
                </div>
                <ul className={styles.ul}>
                    <li>Home</li>
                    <li>Add post</li>
                </ul>
                <div className={styles.ThemeWrapper}>
                    <div className={styles.DayWrapper}>
                        <LightBtn active={bgState === 'light'} changeColorTheme={changeColorTheme} />
                    </div>
                    <div className={styles.NightWrapper}>
                        <DarkBtn active={bgState !== 'light'} changeColorTheme={changeColorTheme} />
                    </div>

                </div>
                <div className={styles.LogOut}>
                    Logout
                </div>
            </div>



        </div>
    )
}