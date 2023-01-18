import { Navigation } from '../Navigaton'
import styles from './Success.module.scss'

export const Success = () => {
    return (
        <>
            <Navigation backToHome='Back to home' text='Success' />
            <form className={styles.Formwrapper}>
                <div>
                    <p>Email confirmed.</p>
                    <p>Your registration is completed.</p>
                </div>
                <input type="button" value="Go to home" />
            </form>
        </>
    )
}