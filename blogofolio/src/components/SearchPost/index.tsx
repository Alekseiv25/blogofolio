import { IPost } from '../Services/PostService'
import style from './SearchPost.module.scss'
import { PostButtons } from '../PostButtons'
import { useDispatch } from 'react-redux'
import { OPEN_POPUP } from '../store/popUpReducer'
export const SearchPost = (props: IPost) => {
    const { date, title, image } = props

    const dispatch = useDispatch()

    const handleShowPopup = () => {
        dispatch({
            type: OPEN_POPUP,
            image: image
        })
    }

    return (<div className={style.post}>
        <div className={style.container}>
            <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={style.title}>{title} </p>
            </div>

        </div>
        <PostButtons />
    </div>)
}