import styles from './Input.module.scss'

interface InputProps {
    type: 'email' | 'password' | 'text'
    label: string
    placeholder: string
    name: string
}

//Что в onChange писать вместо any

export const Input = (props: InputProps) => {
    const { label, type, placeholder, name } = props

    return (
        <>
            <span className={styles.text}>{label}</span>
            <input type={type} name={name} className={styles.input} placeholder={placeholder} />
        </>

    )
}