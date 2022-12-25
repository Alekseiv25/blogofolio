import styles from './BurgerButton.module.scss'


export const BurgerButton = () => {
    return (<button className={styles.button} >
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
    </button>)
}