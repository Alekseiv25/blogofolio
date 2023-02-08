import { useSelector } from 'react-redux'
import styles from './TextArea.module.scss'

interface IProps {
    label: string
    placeholder: string
    className?: string
}

const TextArea = (props: IProps) => {
    const { label, placeholder, className } = props
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    return (
        <>
            <span className={styles.label} style={theme}>{label}</span>
            <textarea className={`${styles.textarea} ${className}`} placeholder={placeholder}></textarea>
        </>
    )
}
export default TextArea