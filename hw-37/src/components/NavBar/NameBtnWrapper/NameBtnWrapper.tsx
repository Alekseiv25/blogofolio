import styles from './NameBtnWrapper.module.scss'

type NameBtnWrapperType = {
    shortName: string
    fullName: string
}


export const NameBtnWrapper = (props:NameBtnWrapperType) => {
    const { shortName, fullName } = props
    return (
        <div className={styles.div}>
            <div className={styles.div2}>
                <span>{shortName}</span>
            </div>
            <span>{fullName}</span>
        </div>
    )
}