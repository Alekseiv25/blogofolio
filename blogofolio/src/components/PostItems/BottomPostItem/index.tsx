import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Layout'
import { IPost } from '../../Services/PostService'
import { PostButtons } from '../../PostButtons'
import style from './BottomPostItem.module.scss'
import { useDispatch } from 'react-redux'
import { OPEN_POPUP } from '../../store/popUpReducer'

export const BottomPostItem = (props: IPost) => {
    const { image, date, title, id } = props
    const { themeColor } = useContext(ThemeContext)

    const dispatch = useDispatch()

    const handleShowPopup = () => {
        dispatch({
            type: OPEN_POPUP,
            image: image
        })
    }


    return (<div className={style.post}>
        <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
        <Link to={`post/${id}`}>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={`${style.title}  ${themeColor === 'dark' ? `${style.dark}` : ''}`}>{title} </p>
            </div>
        </Link>
        <PostButtons />
    </div>)
}