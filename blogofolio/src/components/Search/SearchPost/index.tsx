import { IPost } from '../../Services/PostService'
import style from './SearchPost.module.scss'
import { PostButtons } from '../../PostList/PostButtons/PostButtons'

export const SearchPost = (props: IPost) => {
    const { date, title, image } = props
    return (<div className={style.post}>
        <div className={style.container}>
            <img className={style.image} src={image} alt='123'></img>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={style.title}>{title} </p>
            </div>

        </div>
        <PostButtons />
    </div>)
}