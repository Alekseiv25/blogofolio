import styles from './Navigation.module.scss'

interface Props {
    text: string
}

export const Navigation = (props: Props) => {
    const { text } = props

    return (<div className={styles.navigation}>
        <a href='#!'>Back to home</a>
        <h1>{text}</h1>
    </div>)
}