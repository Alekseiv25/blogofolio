import { IPost } from '../Services/PostService'
import style from './SearchPost.module.scss'
import { PostButtons } from '../PostButtons'
import { useContext } from 'react'
import { ThemeContext } from '../Layout'
export const SearchPost = (props: IPost) => {
    const { date, title, image } = props
    const { themeColor } = useContext(ThemeContext)
    return (<div className={style.post}>
        <div className={style.container}>
            <img className={style.image} src={image} alt='123'></img>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={`${style.title} ${themeColor === 'dark' ? `${style.dark}` : ''}`}>{title} </p>
            </div>

        </div>
        <PostButtons />
    </div>)
}