import { NavLink } from 'react-router-dom'
import styles from './Submit.module.scss'

interface IProps {
    value: string
    onClick: () => void
    link: string
}

export const Submit = (props: IProps) => {
    const { value, link } = props
    return (
        <NavLink to={link}>
            <input type="submit"
                onClick={() => { }}
                className={styles.submit}
                value={value}>
            </input>
        </NavLink>

    )
}