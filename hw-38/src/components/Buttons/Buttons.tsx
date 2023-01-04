import LikeIco from './likeIco.svg'
import DislikeIco from './dislikeIco.svg'
import FavButton from './favorite.svg'
import style from './Buttons.module.scss'
import { useState } from 'react'

export const Appl = () => {
    const [count, setCount] = useState(Math.floor(Math.random() * 100))
    const [activeState, setActiveState] = useState(false)

    const LikeCount = () => {
        if (!activeState) {
            setCount(count + 1)
        }
        else {
            setCount(count - 1)
        }

        setActiveState(prev => !prev)
    }


    return (<><button className={`${style.LikeButton} ${activeState ? `${style.active}` : ''}`} onClick={LikeCount} >
        <img src={LikeIco} alt="LikeIco" /></button>
        <div className={style.LikeCounter}>{count}</div></>)

}



export const DislikeButton = () => {
    return (<button className={style.DislikeButton}><img src={DislikeIco} alt="DislikeIco" /></button>)
}

export const FavoriteButton = () => {
    return (<button className={style.FavoriteButton}><img src={FavButton} alt="FavButton" /></button>)
}

