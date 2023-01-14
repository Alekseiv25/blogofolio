import { Input } from '../Input/Input'
import { Navigation } from '../Navigaton/Navigation'
import { Submit } from '../Submit/Submit'
import styles from './SignIn.module.scss'

export const SignIn = () => {
    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <form className={styles.Formwrapper}>
                <Input type={'email'} name={''} label={'Email'} placeholder={'Your Email'} />
                <Input type={'password'} name={''} label={'Password'} placeholder={'Your password'} />
                <a href='#!' className={styles.passwordtext}>Forgot password?</a>
                <Submit value={'Sign in'} />
                <p>Don't have an account? <a href="#!">Sign up</a></p>
            </form>
        </>
    )
}

