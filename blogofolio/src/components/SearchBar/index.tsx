import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss'
import { SearchButton } from './SearchButton';


export const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className={styles.wrapper}>
            <input type='search'
                className={styles.input}
                placeholder='Search...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchButton searchText={searchText}/>
        </div>
    )
}