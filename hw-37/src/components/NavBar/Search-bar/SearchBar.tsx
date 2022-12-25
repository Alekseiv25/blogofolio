import styles from './SearchBar.module.scss'

export const SearchBar = () => {
    return (<input type='search' className={styles.input} placeholder='Search...' ></input>)
}