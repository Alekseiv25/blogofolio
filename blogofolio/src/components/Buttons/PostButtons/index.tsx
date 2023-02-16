import styles from './PostButtons.module.scss'
import FavoriteButton from './FavoriteButton'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import { IPost } from '../../../services/PostService'

interface IProps {
    post: IPost 
}

export const PostButtons = (props: IProps) => {
    const { post } = props

    return (<div className={styles.container}>
        <div className={styles.LikeDislikeContainer}>
            <LikeButton />
            <DislikeButton />
        </div>
        <FavoriteButton post={post} />
    </div>)
}











