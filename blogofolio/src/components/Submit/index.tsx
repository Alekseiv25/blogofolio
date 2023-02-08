import styles from './Submit.module.scss'

interface IProps {
    value: string
    onClick?: () => void
    link?: string
    className?: string
}

export const Submit = (props: IProps) => {
    const { value, className } = props
    return (
        <input type="submit"
            className={`${styles.submit} ${className}`}
            value={value}>
        </input>


    )
}