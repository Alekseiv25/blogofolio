import styles from './UserButton.module.scss'

type UserButtonType = {
    shortName: string
    fullName: string
}


export const UserButton = (props: UserButtonType) => {
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