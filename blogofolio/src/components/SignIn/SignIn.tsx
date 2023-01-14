import { useState } from 'react'
import { Input } from '../Input/Input'
import { Navigation } from '../Navigaton/Navigation'
import { Submit } from '../Submit/Submit'
import styles from './SignIn.module.scss'

export const SignIn = () => {
    const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
        const formData = new FormData(event.currentTarget)
        event.preventDefault()
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }
    }
    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <form onSubmit={submit} className={styles.Formwrapper}>
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your Email'
                    name='email'
                // value={signInData.email}
                // onChange={changeLogin}
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='password'
                // value={signInData.password}
                // onChange={changePassword}
                />
                <a href='#!' className={styles.passwordtext}>Forgot password?</a>
                <Submit value='Sign in' />
                <p>Don't have an account? <a href="#!">Sign up</a></p>
            </form>
        </>
    )
}






    // const [signInData, setSignInData] = useState({
    //     email: '',
    //     password: ''
    // })

    // const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const currentValue = e.target.value
    //     setSignInData({
    //         ...signInData,
    //         email: currentValue
    //     })
    // }

    // const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const currentValue = e.target.value
    //     setSignInData({
    //         ...signInData,
    //         password: currentValue
    //     })
    // }

    // const clickForm = (e: any) => {
    //     console.log(e)