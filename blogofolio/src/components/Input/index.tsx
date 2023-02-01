import { useSelector } from 'react-redux'
import styles from './Input.module.scss'

interface InputProps {
    type: 'email' | 'password' | 'text'
    label: string
    placeholder: string
    name: string
    value?: any
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const { label, type, placeholder, name, } = props
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)


    return (
        <>
            <span className={styles.text} style={theme}>{label}</span>
            <input onChange={()=> {}} type={type} name={name} className={styles.input} placeholder={placeholder} />
        </>

    )
}