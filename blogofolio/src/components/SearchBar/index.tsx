import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss'
import { SearchButton } from './SearchButton';


export const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const exmpl = (e: any) => {
        setSearchText(e.target.value)
        navigate("/search", { state: searchText });
    }

    return (
        <div className={styles.wrapper}>
            <input type='search'
                className={styles.input}
                placeholder='Search...'
                value={searchText}
                onChange={exmpl}
            />
            <SearchButton searchText={searchText} />
        </div>
    )
}