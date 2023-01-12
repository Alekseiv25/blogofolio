import styles from './Tab.module.scss'

type TabType = {
    text: string
}

export const Tab = (props: TabType) => {
    const { text } = props
    return (<button className={styles.tab}>{text}</button>)
}