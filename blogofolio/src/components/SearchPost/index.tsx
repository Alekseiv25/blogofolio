import { IPost } from '../../services/PostService'
import style from './SearchPost.module.scss'
import { PostButtons } from '../Buttons/PostButtons'
import { useDispatch } from 'react-redux'
import { OPEN_POPUP } from '../../store/reducers/popUpReducer'
export const SearchPost = (props: {post: IPost}) => {
    const { post:{date, title, image}, post } = props

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
        <PostButtons post={post} />
    </div>)
}