import { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Input } from "../../Input"
import { Navigation } from "../../Navigaton"
import { Submit } from "../../Submit"
import styles from './SignUp.module.scss'

export const SignUp = () => {
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: ''
    })
    const [showConfirm, setShowConfirm] = useState(false)
    const checkPassword = () => {
        setShowConfirm(formData.password === formData.checkPassword)
    }

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        setFormData({
            ...formData,
            name: currentValue
        })
    }

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

    const changePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        setFormData({
            ...formData,
            checkPassword: currentValue
        })
    }

    if (showConfirm) {
        navigate('/confirmation')
    }

    //Почему не работает?(((((


    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign Up'} />
            <form className={styles.formwrapper}>
                <Input
                    type='text'
                    label='Name'
                    placeholder='Your name'
                    name='name'
                    value={formData.name}
                    onChange={changeName} />
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your email'
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
                <Input
                    type='password'
                    label='Confirm password'
                    placeholder='Confirm password'
                    name='confirm password'
                    value={formData.checkPassword}
                    onChange={changePasswordCheck}
                />
                <Submit value="Sign Up" onClick={checkPassword} link={''} />
                <p>Alredy have an account? <NavLink style={theme} to={'/signIn'}>Sign In</NavLink></p>
            </form>
        </>
    )
}
