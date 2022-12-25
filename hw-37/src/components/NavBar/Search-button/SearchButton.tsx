import styles from './SearchButton.module.scss'
import SearchIco from './search-ico.svg'

export const SearchButton = () => {
    return (<button className={styles.button} placeholder='Search...' ><img src={SearchIco} alt="search-ico" /></button>)
}