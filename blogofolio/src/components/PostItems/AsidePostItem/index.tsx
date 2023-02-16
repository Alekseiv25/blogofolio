import { IPost } from '../../../services/PostService'
import style from './AsidePostItem.module.scss'
import { PostButtons } from '../../Buttons/PostButtons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { OPEN_POPUP } from '../../../store/reducers/popUpReducer'

export const AsidePostItem = (props: { post: IPost }) => {
    const { post: { date, title, image, id }, post } = props
    const theme = useSelector((state: any) => state.theme)
    const dispatch = useDispatch()

    const handleShowPopup = () => {
        dispatch({
            type: OPEN_POPUP,
            image: image
        })
    }

    return (
        <>
            <div className={style.post}>

                <div className={style.container}>
                    <Link to={`post/${id}`}>
                        <div className={style.titlewrapper}>
                            <p className={style.date}>{date}</p>
                            <p className={style.title} style={theme} >{title}  </p>
                        </div>
                    </Link>
                    <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
                </div>
                <PostButtons post={post} />
            </div>


        </>)
}