import { useState } from 'react'
import { Input } from '../Input'
import { Navigation } from '../Navigaton'
import { Submit } from '../Submit'
import styles from './SignIn.module.scss'

export const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        setFormData({
            ...formData,
            email: currentValue
        })
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        setFormData({
            ...formData,
            password: currentValue
        })
    }


    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <form  className={styles.Formwrapper}>
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your Email'
                    name='email'
                    value={formData.email}
                    onChange={changeEmail}
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='password'
                    value={formData.password}
                    onChange={changePassword}
                />
                <a href='#!' className={styles.passwordtext}>Forgot password?</a>
                <Submit value='Sign in' onClick={()=> {}}/>
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