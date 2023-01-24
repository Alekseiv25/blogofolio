import { useContext } from 'react'
import { ThemeContext } from '../../../Layout'
import styles from './Tab.module.scss'

type TabType = {
    text: string
}


export const Tab = (props: TabType) => {
    const { text } = props
    const { themeColor } = useContext(ThemeContext)
    return (<button className={`${styles.tab}  ${themeColor === 'dark' ? `${styles.dark}` : ''}`}>{text}</button>)
}