import { useState } from "react"
import { Input } from "../Input/Input"
import { Navigation } from "../Navigaton/Navigation"
import { Submit } from "../Submit/Submit"
import styles from './SignUp.module.scss'

export const SignUp = () => {
    const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
        const formData = new FormData(event.currentTarget)
        event.preventDefault()
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }
    }
    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign Up'} />
            <form onSubmit={submit} className={styles.formwrapper}>
                <Input
                    type='text'
                    label='Name'
                    placeholder='Your name'
                    name='name'
                />
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your email'
                    name='email'
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='password'
                />
                <Input
                    type='password'
                    label='Confirm password'
                    placeholder='Confirm password'
                    name='confirm password'
                />
                <Submit value="Sign Up" />
                <p>Alredy have an account? <a href="#!">Sign in</a></p>
            </form>
        </>
    )
}
