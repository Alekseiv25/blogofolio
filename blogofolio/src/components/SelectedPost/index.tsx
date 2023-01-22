import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostButtons } from "../PostList/PostButtons/PostButtons"
import { getPostById, IPost } from "../Services/PostService"
import styles from './SelectedPost.module.scss'
import { SelectedPostNav } from "./SelectedPostNav"

export const SelectedPost = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [selectedPost, setSelectedPost] = useState<IPost>({} as IPost)

    useEffect(() => {
        getPostById(params.id).then(post => { setSelectedPost(post) })
    }, [])

    if (!selectedPost) {
        return (
            <svg className={styles.spinner} viewBox="0 0 50 50">
                <circle
                    className={styles.path}
                    cx="25" cy="25" r="20"
                    fill="none"
                    strokeWidth="5">
                </circle>
            </svg>)
    }
    const goHome = () => navigate('/')
    //Не работает спинер

    return (<section>
        <div className={styles.nav}>
            <a className={styles.link} onClick={goHome}>Home</a>
            <p className={styles.postid}>Post: {params.id}</p>
        </div>
        <div className={styles.selectedPost}>
            <div className={styles.post}>
                <p className={styles.title}>{selectedPost.title} </p>
                <img className={styles.image} src={selectedPost.image} alt='123'></img>
                <p className={styles.text}>{selectedPost.text}</p>
                <PostButtons />
            </div>
            <SelectedPostNav  />
        </div>

    </section>)
}