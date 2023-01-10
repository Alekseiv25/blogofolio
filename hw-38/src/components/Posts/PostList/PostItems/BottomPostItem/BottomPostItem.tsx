import { Buttons } from '../../../../Buttons/Buttons'
import { IPost } from '../../../PostService'
import style from './BottomPostItem.module.scss'

export const BottomPostItem = (props: IPost) => {
    const { user } = props
    return (<div className={style.post}>
        <img className={style.image} src={user.image} alt='123'></img>
        <div className={style.titlewrapper}>
            <p className={style.date}>{user.date}</p>
            <p className={style.title}>{user.title} </p>
        </div>
        <Buttons />
    </div>)
}