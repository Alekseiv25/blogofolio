import { useCallback, useState } from 'react'
import styles from './BurgerButton.module.scss'
interface IProps {
    onClick?: (isOpen: boolean) => void
}


export const BurgerButton = (props: IProps) => {
    const { onClick } = props
    const [isOpen, setIsOpen] = useState(false)

    const onToogle = useCallback(() => {
        const newState = !isOpen
        setIsOpen(newState)
        if (onClick) {
            onClick(newState)
        }
    }, [isOpen, onClick])

    return (
        <button onClick={onToogle} className={styles.button}  >
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </button>
    )
}