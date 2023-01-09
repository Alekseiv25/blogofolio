import { IPost } from '../../PostService'
import style from './PostItem.module.scss'
import { Buttons } from '../../../Buttons/Buttons'

export const PostItem = (props: IPost) => {


    return (<div className={style.post}>
        <div className={style.titlewrapper}>
            <p className={style.date}>{props.user.date}</p>
            <p className={style.title}>{props.user.title} </p>
            <p className={style.text}>{props.user.text}</p>
        </div>
        <img className={style.image} src={props.user.image} alt='123'></img>
        <Buttons />
    </div>)
}