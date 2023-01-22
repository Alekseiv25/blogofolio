import styles from './Submit.module.scss'

interface Submit {
    value: string
    onClick: () => void
}

export const Submit = (props: Submit) => {
    const { value} = props
    return (
        <input type="submit" onClick={() => { }} className={styles.submit} value={value} />
    )
}