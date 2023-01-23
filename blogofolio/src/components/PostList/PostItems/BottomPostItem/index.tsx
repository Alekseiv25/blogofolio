import { Link } from 'react-router-dom'
import { IPost } from '../../../Services/PostService'
import { PostButtons } from '../../PostButtons'
import style from './BottomPostItem.module.scss'

export const BottomPostItem = (props: IPost) => {
    const { image, date, title, id } = props
    return (<div className={style.post}>
        <Link to={`post/${id}`}>
            <img className={style.image} src={image} alt='123'></img>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={style.title}>{title} </p>
            </div>
        </Link>
        <PostButtons />
    </div>)
}