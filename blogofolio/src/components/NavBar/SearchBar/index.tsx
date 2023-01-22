import styles from './SearchBar.module.scss'


export const SearchBar = () => {
    return (
        <div className={styles.wrapper}>
            <input type='search' className={styles.input} placeholder='Search...' ></input>
        </div>
    )
}