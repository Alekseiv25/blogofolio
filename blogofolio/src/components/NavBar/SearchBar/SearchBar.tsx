import { useState } from 'react'
import { SearchButton } from './SearchButton/SearchButton'
import styles from './SearchBar.module.scss'

export const SearchBar = () => {
    const [InputDisplay, setInputDisplay] = useState<boolean>(false)
    const SetInput = () => { setInputDisplay(prev => !prev) }
    return (
        <div className={styles.wrapper}>
            <input type='search' className={`${styles.input} ${InputDisplay ? `${styles.active}` : ''}`} placeholder='Search...' ></input>
            <SearchButton changeInput={SetInput} />
        </div>
    )
}