import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

interface Props {
    text: string
    backToHome: string
}

export const Navigation = (props: Props) => {
    const { text, backToHome } = props
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    return (<div className={styles.navigation}>
        <NavLink style={theme} to={'/'}>{backToHome}</NavLink>
        <h1>{text}</h1>
    </div>)
}