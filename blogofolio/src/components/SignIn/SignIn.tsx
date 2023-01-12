import { Navigation } from '../Navigaton/Navigation'
import styles from './SignIn.module.scss'

export const SignIn = () => {
    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <form className={styles.Formwrapper}>
                <span className={styles.text}>Email</span>
                <input type="email" name="" id="" placeholder='Your email' />
                <span className={styles.text}>Password</span>
                <input type="password" name="" id="" placeholder='Your password' />
                <a href='#!' className={styles.passwordtext}>Forgot password?</a>
                <input className={styles.button} type="button" value="Sign in" />
                <p>Don't have an account? <a href="#!">Sign up</a></p>
            </form>
        </>
    )
}