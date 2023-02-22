import styles from './PostButtons.module.scss'
import FavoriteButton from './FavoriteButton'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import { IPost } from '../../../services/PostService'

interface IProps {
    post: IPost
    likes: number
    dislikes: number
}

export const PostButtons = (props: IProps) => {
    const { post, likes, dislikes } = props

    return (<div className={styles.container}>
        <div className={styles.LikeDislikeContainer}>
            <LikeButton likes={likes} />
            <DislikeButton dislikes={dislikes} />
        </div>
        <FavoriteButton post={post} />
    </div>)
}











