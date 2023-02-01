import { IPost } from '../../Services/PostService'
import style from './MainPostItem.module.scss'
import { PostButtons } from '../../PostButtons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { OPEN_POPUP } from '../../store/popUpReducer'

export const MainPostItem = (props: IPost) => {
    const { date, title, text, image, id } = props
    const theme = useSelector((state: any) => state.theme)
    const dispatch = useDispatch()

    const handleShowPopup = () => {
        dispatch({
            type: OPEN_POPUP,
            image: image
        })
    }


    return (<div className={style.post}>
        <div className={style.container}>
            <Link to={`post/${id}`}>
                <div className={style.titlewrapper}>
                    <p className={style.date}>{date}</p>
                    <p className={style.title} style={theme}>{title} </p>
                    <p className={style.text}>{text}</p>
                </div>
            </Link>
            <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
        </div>
        <PostButtons />
    </div>)
}
