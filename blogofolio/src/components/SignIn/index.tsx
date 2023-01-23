import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
            <form className={styles.Formwrapper}>
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
                <NavLink className={styles.passwordtext} to={'/reset'}>Forgot password?</NavLink>
                <Submit value='Sign in' onClick={() => { }} link={'/success'} />
                <p>Don't have an account? <NavLink to={'/signUp'}>Sign up</NavLink></p>
            </form>
        </>
    )
}