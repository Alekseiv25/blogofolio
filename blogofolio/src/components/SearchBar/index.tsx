import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../store/store';
import styles from './SearchBar.module.scss'

const getSearchStateSelector = (state: AppState) => state.search
export const SearchBar = () => {

    const searchState = useSelector(getSearchStateSelector)


    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const exmpl = (e: any) => {
        setSearchText(e.target.value)
        navigate("/search", { state: e.target.value });
    }

    return (
        <div className={styles.wrapper}>
            <input type='search'
                className={searchState.isOpen ? `${styles.input} ${styles.active}` : `${styles.input}`}
                placeholder='Search...'
                value={searchText}
                onChange={exmpl}
            />
        </div>
    )
}