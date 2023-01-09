import LikeIco from './likeIco.svg'
import DislikeIco from './dislikeIco.svg'
import FavButton from './favorite.svg'
import style from './Buttons.module.scss'
import { useState } from 'react'

export const Buttons = () => {
    const [likeCount, setLikeCount] = useState<number>(Math.floor(Math.random() * 100))
    const [likeActive, setLikeActive] = useState<boolean>(false)
    const [dislikeActive, setDislikeActive] = useState<boolean>(false)
    const [dislikeCount, setDislikeCount] = useState<number>(Math.floor(Math.random() * 50))

    const [favActive, setFavActive] = useState(false)


    const LikeCount = () => {
        if (!likeActive) {
            setLikeCount(likeCount + 1)
        }
        else {
            setLikeCount(likeCount - 1)
        }



        setLikeActive(prev => !prev)

    }
    const DislikeCount = () => {
        if (!dislikeActive) {
            setDislikeCount(dislikeCount + 1)
        }
        else {
            setDislikeCount(dislikeCount - 1)
        }
        setDislikeActive(prev1 => !prev1)
    }

    const ChangeBg = () => {
        setFavActive(prev2 => !prev2)
    }





    return (<><button className={`${style.LikeButton} ${likeActive ? `${style.likeActive}` : ''}`} onClick={LikeCount} >
        <img src={LikeIco} alt="LikeIco" /></button>
        <div className={style.LikeCounter}>{likeCount}</div>


        <button className={`${style.DislikeButton} ${dislikeActive ? `${style.dislikeActive}` : ''}`} onClick={DislikeCount}>
            <img src={DislikeIco} alt="DislikeIco" />
        </button>
        <div className={style.dislikeCounter}>{dislikeCount}</div>

        <button className={`${style.FavoriteButton} ${favActive ? `${style.favActive}` : ''}`}><img src={FavButton} alt="FavButton" onClick={ChangeBg} /></button>
    </>)

}




