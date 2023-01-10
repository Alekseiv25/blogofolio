import { IPost } from '../../../PostService'
import style from './AsidePostItem.module.scss'
import { Buttons } from '../../../../Buttons/Buttons'




export const AsidePostItem = (props: IPost) => {
    const { user } = props
    return (<div className={style.post}>
        <div className={style.container}>
            <div className={style.titlewrapper}>
                <p className={style.date}>{user.date}</p>
                <p className={style.title}>{user.title} </p>
            </div>
            <img className={style.image} src={user.image} alt='123'></img></div>
        <Buttons />
    </div>)
}