import { IPost } from '../../../Services/PostService'
import style from './MainPostItem.module.scss'
import { PostButtons } from '../../PostButtons/PostButtons'

export const MainPostItem = (props: IPost) => {
    const { date, title, text, image } = props

    return (<div className={style.post}>
        <div className={style.container}>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={style.title}>{title} </p>
                <p className={style.text}>{text}</p>
            </div>
            <img className={style.image} src={image} alt='123'></img>
        </div>
        <PostButtons />
    </div>)
}
