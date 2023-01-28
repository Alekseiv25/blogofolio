import { Navigation } from "../../Navigaton"
import { Submit } from "../../Submit"
import styles from './Confirmation.module.scss'

interface IProps {
    email: string
}

export const Confirmation = (props: IProps) => {
    const { email } = props
    return (
        <>
            <Navigation backToHome='Back to home' text='Registration Confirmation' />
            <form className={styles.formwrapper}>
                <div>
                    <p>Please activate your account with the activation
                        link in the email <b>{email}</b>.
                        <br />
                        Please, check your email
                    </p>
                </div>
                <Submit value="Go to home" onClick={() => { } } link={"/"} />
            </form>
        </>
    )
}