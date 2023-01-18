import styles from './SearchBar.module.scss'


interface IProps {
    show: boolean
}

export const SearchBar = (props: IProps) => {
    const { show } = props

    if (!show) {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <input type='search' className={styles.input} placeholder='Search...' ></input>
        </div>
    )
}