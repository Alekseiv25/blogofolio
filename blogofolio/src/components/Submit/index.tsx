import {  useNavigate } from 'react-router-dom'
import styles from './Submit.module.scss'

interface IProps {
    value: string
    onClick: () => void
    link: string
}

export const Submit = (props: IProps) => {
    const navigate = useNavigate()
    const { value, link } = props
    const link1 = () => navigate(link)
    return (

        <input type="submit"
            onClick={link1}
            className={styles.submit}
            value={value}>
        </input>


    )
}