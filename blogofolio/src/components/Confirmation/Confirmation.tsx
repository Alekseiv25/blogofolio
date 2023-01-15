import { Navigation } from "../Navigaton/Navigation"
import { Submit } from "../Submit/Submit"
import styles from './Confirmation.module.scss'

export const Confirmation = () => {
    return (
        <>
            <Navigation backToHome='Back to home' text='Registration Confirmation' />
            <form className={styles.formwrapper}>
                <div>
                    <p>Please activate your account with the activation
                        link in the email example@gmail.com.
                        <br />
                        Please, check your email
                    </p>
                </div>
                <Submit value="Go to home" />
            </form>
        </>
    )
}