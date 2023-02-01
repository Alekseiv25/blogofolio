import { IPost } from '../../Services/PostService'
import style from './AsidePostItem.module.scss'
import { PostButtons } from '../../PostButtons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { OPEN_POPUP } from '../../store/popUpReducer'

export const AsidePostItem = (props: IPost) => {
    const { date, title, image, id } = props

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
                            <p className={style.title}>{title} </p>
                        </div>
                    </Link>
                    <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
                </div>
                <PostButtons />
            </div>


        </>)
}