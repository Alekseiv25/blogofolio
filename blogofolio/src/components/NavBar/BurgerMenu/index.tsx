import styles from './BurgerMenu.module.scss'
import { UserButton } from '../UserButton'
import { useContext, useState } from 'react'
import { LightBtn } from './ThemeButtons/Light'
import { DarkBtn } from './ThemeButtons/Dark'
import { ThemeContext } from '../../App'


interface IProps {
    show: boolean
}

export const BurgerMenu = (props: IProps) => {
    const { show } = props
	const theme = useContext(ThemeContext)
	const [state, setState] = theme
	const changeTheme = () => {
		setState({
			...state,
			active: state.active === 'dark' ? 'light' : 'dark'
		})
	}

    if (!show) {
        return null
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
                        <LightBtn active={state.active === 'light'} changeColorTheme={changeTheme} />
                    </div>
                    <div className={styles.NightWrapper}>
                        <DarkBtn active={state.active === 'dark'} changeColorTheme={changeTheme} />
                    </div>

                </div>
                <div className={styles.LogOut}>
                    Logout
                </div>
            </div>



        </div>
    )
}