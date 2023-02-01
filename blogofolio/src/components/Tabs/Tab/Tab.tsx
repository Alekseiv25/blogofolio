import { useSelector } from 'react-redux'
import styles from './Tab.module.scss'

type TabType = {
    text: string
}


export const Tab = (props: TabType) => {
    const theme = useSelector((state: any) => state.theme)
    const { text } = props
    return (<button className={styles.tab} style={theme}>{text}</button>)
}