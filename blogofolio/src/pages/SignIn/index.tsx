import { FormEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/hoc/AuthProvider'
import { Input } from '../../components/Input'
import { Navigation } from '../../components/Navigaton'
import { Submit } from '../../components/Submit'
import { getTokensAsyncAction } from '../../store/reducers/auth/actions'
import { AppState } from '../../store/store'
import styles from './SignIn.module.scss'



export const SignIn = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: AppState) => state.auth);
    const navigate = useNavigate()
    const location = useLocation()
    const { signIn } = useAuth()
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)

    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: any) => {
        e.preventDefault();

        const email: string = e.currentTarget.email.value;
        const password: string = e.currentTarget.password.value;
        dispatch(getTokensAsyncAction(email, password));
        console.log(email, password);
        const userData: any = { email, password }
        signIn(userData, () => navigate(fromPage))
    }



    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <div>{JSON.stringify(auth, null, 2)}</div>
            <form className={styles.Formwrapper} onSubmit={handleSubmit}>
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your Email'
                    name={'email'}
                    isRequired={false}
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='password'
                    isRequired={false}
                />
                <span></span>
                <NavLink className={styles.passwordtext} style={theme} to={'/reset'}>Forgot password?</NavLink>
                <Submit value='Sign in' />
                <p>Don't have an account? <NavLink style={theme} to={'/signUp'}>Sign up</NavLink></p>
            </form>
        </>
    )
}