import { IPost } from '../../Services/PostService'
import style from './MainPostItem.module.scss'
import { PostButtons } from '../../PostButtons'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Layout'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { OPEN_POPUP } from '../../store/popUpReducer'

export const MainPostItem = (props: IPost) => {
    const { date, title, text, image, id } = props
    const { themeColor } = useContext(ThemeContext)

    const dispatch = useDispatch()

    const handleShowPopup = () => {
        dispatch({
            type: OPEN_POPUP,
            image: image
        })
    }


    return (<div className={style.post}>
        <Link to={`post/${id}`}>
        </Link>
        <div className={style.container}>

            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={`${style.title} ${themeColor === 'dark' ? `${style.dark}` : ''}`}>{title} </p>
                <p className={style.text}>{text}</p>

            </div>
            <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
        </div>
        <PostButtons />
    </div>)
}
