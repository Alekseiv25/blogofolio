interface IProps {
    label: string
    placeholder: string
}

const TextArea = (props: IProps) => {
    const { label, placeholder } = props
    return (
        <>
            <span>{label}</span>
            <textarea placeholder={placeholder}></textarea>
        </>
    )
}
export default TextArea