import styles from './Input.module.scss'

interface InputProps {
    type: 'email' | 'password' | 'text'
    name: string
    label: string
    placeholder: string
}

export const Input = (props: InputProps) => {
    const { label, type, name, placeholder } = props

    return (
        <>
            <span className={styles.text}>{label}</span>
            <input type={type} name={name} className={styles.input} placeholder={placeholder} />
        </>

    )
}