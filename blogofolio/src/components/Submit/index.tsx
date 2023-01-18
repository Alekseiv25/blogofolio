import styles from './Submit.module.scss'

interface Submit {
    value: string
}

export const Submit = (props: Submit) => {
    return (
        <input type="submit" className={styles.submit} value={props.value} />
    )
}