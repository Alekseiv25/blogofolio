import styles from './BurgerButton.module.scss'
interface Props {
    activeBurger: (style: true | false) => void
}

export const BurgerButton = (props: Props) => {
    return (<button onClick={() => props.activeBurger(false)} className={styles.button}  >
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
    </button>)
}