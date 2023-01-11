import styles from './BurgerButton.module.scss'
// interface Props {
//     activeBurger: (style: true | false) => void
// }
//props
export const BurgerButton = () => {


    // onClick={() => props.activeBurger(true)}
    return (<button className={styles.button}  >
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
    </button>)
}