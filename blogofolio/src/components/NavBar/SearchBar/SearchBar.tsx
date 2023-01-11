import { useState } from 'react'
import { SearchButton } from './SearchButton/SearchButton'
import styles from './SearchBar.module.scss'

export const SearchBar = () => {
    const [InputDisplay, setInputDisplay] = useState<boolean>(false)
    // const [inputState, setInputState] = useState<'flex' | 'none'>('none')
    // const changeInputState = (style: 'flex' | 'none') => {
    //     setInputState(style)
    // }
    const setLike = () => { setInputDisplay(prev => !prev) }
    return (
        <div className={styles.wrapper}>
            <input type='search' className={`${styles.input} ${InputDisplay ? `${styles.active}` : ''}`} placeholder='Search...' ></input>
            <SearchButton changeInput={setLike} />
        </div>
    )
}