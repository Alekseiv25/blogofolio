import { useDispatch } from 'react-redux'
import { TOGGLE_BURGER } from '../../../store/reducers/burgerMenuReducer'
import styles from './BurgerButton.module.scss'


export const BurgerButton = () => {
    const dispatch = useDispatch()

    const handleShowBurger = () => {
        dispatch({
            type: TOGGLE_BURGER
        })
    }

    return (
        <button onClick={handleShowBurger} className={styles.button}  >
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </button>
    )
}