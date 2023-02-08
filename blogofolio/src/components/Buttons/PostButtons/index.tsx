// import DislikeIco from './dislikeIco.svg'
// import FavButton from './favorite.svg'
import styles from './PostButtons.module.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const PostButtons = () => {

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


    // "#313037"

    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)




    return (<div className={styles.container}><div className={styles.LikeDislikeContainer}>
        <button className={`${styles.LikeButton} ${likeActive ? `${styles.likeActive}` : ''}`} onClick={LikeCount}  >
            <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                < path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z"
                    fill={likeActive ? `${"#5360CD"}` : `${theme.color === '#313037' ? '#313037' : '#FFFFFF'}`}
                />
            </svg>
        </button>
        <div className={styles.LikeCounter}>{likeCount}</div>


        <button className={`${styles.DislikeButton} ${dislikeActive ? `${styles.dislikeActive}` : ''}`} onClick={DislikeCount}>
            <svg style={theme} width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3663 10.4239C20.2533 11.0519 19.6963 11.5129 19.0363 11.5009H17.3663V2.50088H19.0543C19.6963 2.45188 20.2523 2.94788 20.3663 3.57688V10.4239ZM15.3663 12.2879L11.7583 20.4059C10.9513 20.1479 10.3663 19.3909 10.3663 18.5009V14.5009C10.3663 13.9479 9.91829 13.5009 9.36629 13.5009H3.69729C3.65129 13.4979 3.59029 13.4989 3.53329 13.4899C2.98829 13.4069 2.61229 12.8959 2.69429 12.3519L4.07529 3.35088C4.14929 2.86088 4.60129 2.52188 5.08629 2.50088H15.3663V12.2879ZM22.3573 3.36588C22.1353 1.72288 20.7303 0.499878 19.0943 0.499878C19.0753 0.499878 19.0553 0.499878 19.0363 0.500878H5.09729C3.61029 0.510878 2.32029 1.58088 2.09829 3.04888L0.717287 12.0509C0.470287 13.6859 1.59829 15.2179 3.23029 15.4659C3.39029 15.4909 3.55329 15.5029 3.70629 15.5009H8.36629V18.5009C8.36629 20.7069 10.1603 22.5009 12.3663 22.5009C12.7623 22.5009 13.1193 22.2679 13.2803 21.9069L17.0153 13.5009H19.0183C20.6883 13.5059 22.1323 12.2979 22.3573 10.6349C22.3633 10.5909 22.3663 10.5459 22.3663 10.5009V3.50088C22.3663 3.45588 22.3633 3.41088 22.3573 3.36588Z"
                    fill={dislikeActive ? `${"#ff0000"}` : `${theme.color === '#313037' ? '#313037' : '#FFFFFF'}`}
                />
            </svg>

        </button>
        <div className={styles.dislikeCounter}>{dislikeCount}</div>
    </div>

        <div className={styles.container}>
            <button onClick={ChangeBg} className={`${styles.FavoriteButton} ${favActive ? `${styles.favActive}` : ''}`}>
                <svg width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 15C12.204 15 12.407 15.062 12.581 15.187L18 19.057V5C18 4.449 17.552 4 17 4H7C6.449 4 6 4.449 6 5V19.057L11.419 15.187C11.593 15.062 11.796 15 12 15ZM19 22C18.795 22 18.592 21.937 18.419 21.813L12 17.229L5.581 21.813C5.277 22.032 4.875 22.062 4.542 21.89C4.209 21.718 4 21.375 4 21V5C4 3.346 5.346 2 7 2H17C18.654 2 20 3.346 20 5V21C20 21.375 19.791 21.718 19.458 21.89C19.313 21.963 19.156 22 19 22Z"
                        fill={favActive ? `${"#5360CD"}` : `${theme.color === '#313037' ? '#313037' : '#FFFFFF'}`}
                    />
                </svg>
            </button>

            <button >
                <svg width="20"
                    height="4"
                    viewBox="0 0 20 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 2C0 3.10267 0.897333 4 2 4C3.10267 4 4 3.10267 4 2C4 0.897333 3.10267 0 2 0C0.897333 0 0 0.897333 0 2ZM10 4C8.89733 4 8 3.10267 8 2C8 0.897333 8.89733 0 10 0C11.1027 0 12 0.897333 12 2C12 3.10267 11.1027 4 10 4ZM18 4C16.8973 4 16 3.10267 16 2C16 0.897333 16.8973 0 18 0C19.1027 0 20 0.897333 20 2C20 3.10267 19.1027 4 18 4Z"
                        fill={theme.color === '#313037' ? '#313037' : '#FFFFFF'}
                    />
                </svg>

            </button>

        </div>
    </div>)

}
