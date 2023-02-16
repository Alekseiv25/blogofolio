import { FormEventHandler, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { Navigation } from "../../components/Navigaton"
import { Submit } from "../../components/Submit"
import { registerUserAsyncAction } from "../../store/reducers/registerReducer/actions"
import styles from './SignUp.module.scss'



export const SignUp = () => {
    const dispatch = useDispatch();
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)



    const navigate = useNavigate();
    // const location = useLocation();
    // const { signIn } = useAuth();

    // const dispatch = useDispatch()

    const validation = {
        isRequiredUserName: false,
        isRequiredUserEmail: false,
        isRequiredUserPassword: false,
        isRequiredUserConfirmPassword: false,
    };

    const [isrRequiredField, /*setIsRequiredFiled*/] = useState(validation);
    // const fromPage = location.state?.from?.pathname || "/";

    // if (showConfirm) {
    //     navigate('/confirmation')
    // }

    //Почему не работает?(((((

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const name: string = e.currentTarget.userName.value;
        const email: string = e.currentTarget.userEmail.value;
        const password: string = e.currentTarget.userPassword.value;
        // const confirmPassword: string = e.currentTarget.confirmUserPassword.value;

        dispatch(
            registerUserAsyncAction(name, email, password, () =>
                navigate('/confirmation')
            )
        );
    };


    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign Up'} />
            <form className={styles.formwrapper} onSubmit={handleSubmit}>
                <Input
                    type='text'
                    label='Name'
                    placeholder='Your name'
                    name='userName'
                    isRequired={isrRequiredField.isRequiredUserName}
                />
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your email'
                    name='userEmail'
                    isRequired={isrRequiredField.isRequiredUserEmail}
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='userPassword'
                    isRequired={isrRequiredField.isRequiredUserPassword}
                />
                <Input
                    type='password'
                    label='Confirm password'
                    placeholder='Confirm password'
                    name='confirmUserPassword'
                    isRequired={isrRequiredField.isRequiredUserConfirmPassword}
                />
                <Submit value="Sign Up" link={''} />
                <p>Alredy have an account? <NavLink style={theme} to={'/signIn'}>Sign In</NavLink></p>
            </form>
        </>
    )
}
