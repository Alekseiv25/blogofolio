import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

interface Props {
    text: string
    backToHome: string
}

export const Navigation = (props: Props) => {
    const { text, backToHome } = props

    return (<div className={styles.navigation}>
        <NavLink to={'/'}>{backToHome}</NavLink>
        <h1>{text}</h1>
    </div>)
}