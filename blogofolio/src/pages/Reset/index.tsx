import { Input } from '../../components/Input'
import { Navigation } from '../../components/Navigaton'
import { Submit } from '../../components/Submit'
import styles from './Reset.module.scss'

export const Reset = () => {

    
    return (
        <>
            <Navigation text={'Reset password'} backToHome={'Back to home'} />
            <form className={styles.formwrapper}>
                <Input type={'email'} label={'Email'} placeholder={'Your email'} name={'email'} onChange={() => { }} />
                <Submit link={'/'} value={'Reset'} onClick={() => { }} />
            </form>
        </>
    )
}