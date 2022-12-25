import styles from './Title.module.scss'

type ButtonType = {
    text: string
}

export const Title = (props: ButtonType) => {
    const { text } = props
    return (<button className={styles.button} >{text}</button>)
}