import { Link } from 'react-router-dom'
import { IPost } from '../../Services/PostService'
import { PostButtons } from '../../PostButtons'
import style from './BottomPostItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { OPEN_POPUP } from '../../store/popUpReducer'

export const BottomPostItem = (props: IPost) => {
    const { image, date, title, id } = props
    const theme = useSelector((state: any) => state.theme)

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
                <p className={style.title} style={theme}>{title} </p>
            </div>
        </Link>
        <PostButtons />
    </div>)
}