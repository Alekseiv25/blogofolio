import { FormEventHandler } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hoc/AuthProvider'
import { Input } from '../../Input'
import { Navigation } from '../../Navigaton'
import { Submit } from '../../Submit'
import styles from './SignIn.module.scss'



export const SignIn = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { signIn } = useAuth()



    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // })
    // const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const currentValue = e.currentTarget.value
    //     setFormData({
    //         ...formData,
    //         email: currentValue
    //     })
    // }

    // const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const currentValue = e.currentTarget.value
    //     setFormData({
    //         ...formData,
    //         password: currentValue
    //     })
    // }

    const fromPage = location.state?.from?.pathname || '/'
    // : FormEvent<HTMLFormElement>
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData: any = {}
        for (let [key, value] of formData.entries()) {
            userData[key] = value;
            if (!value) {
                alert('Заполни все данные')
                return
            }
            console.log(key, value);
        }

        signIn(userData, () => navigate(fromPage));


        // e.preventDefault()
        // const user = formData
        // signIn(user, () => navigate(fromPage, { replace: true }))
        // if (!formData.email || !formData.password) {
        //     alert('Заполни все данные')
        // }
        //     console.log(formData);
    }


    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <form className={styles.Formwrapper} onSubmit={handleSubmit}>
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your Email'
                    name='email'
                // value={formData.email}
                // onChange={changeEmail}
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='password'
                // value={formData.password}
                // onChange={changePassword}
                />
                <span></span>
                <NavLink className={styles.passwordtext} to={'/reset'}>Forgot password?</NavLink>
                <Submit value='Sign in' />
                <p>Don't have an account? <NavLink to={'/signUp'}>Sign up</NavLink></p>
            </form>
        </>
    )
}