import { IPost } from '../../../Services/PostService'
import style from './MainPostItem.module.scss'
import { PostButtons } from '../../PostButtons'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../Layout'
import { useContext } from 'react'

export const MainPostItem = (props: IPost) => {
    const { date, title, text, image, id } = props
    const {themeColor} = useContext(ThemeContext)
    return (<div className={style.post}>
        <Link to={`post/${id}`}>
            <div className={style.container}>

                <div className={style.titlewrapper}>
                    <p className={style.date}>{date}</p>
                    <p className={`${style.title} ${themeColor === 'dark' ? `${style.dark}` : '' }`}>{title} </p>
                    <p className={style.text}>{text}</p>
                </div>
                <img className={style.image} src={image} alt='123'></img>
            </div>
        </Link>
        <PostButtons />
    </div>)
}
