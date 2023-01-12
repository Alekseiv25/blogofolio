import { Tab } from "./Tab/Tab"
import styles from './Tabs.module.scss'

export const Tabs = () => {
    return (<div className={styles.tabs}>
        <Tab text='All' />
        <Tab text='My Favorites' />
        <Tab text='Popular' />
    </div>)
}