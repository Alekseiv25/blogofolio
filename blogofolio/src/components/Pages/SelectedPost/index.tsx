import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostButtons } from "../../PostButtons"
import { getPostById, IPost } from "../../Services/PostService"
import styles from './SelectedPost.module.scss'
import { SelectedPostNav } from "../../SelectedPostNav"
import { useSelector } from "react-redux"
import { LoadSpinner } from "../../loadSpinner"

export const SelectedPost = () => {
    const getThemeSelector = (state: any) => state.theme
    const theme = useSelector(getThemeSelector)
    const params = useParams()
    const navigate = useNavigate()
    const [selectedPost, setSelectedPost] = useState<IPost>({} as IPost)

    useEffect(() => {
        getPostById(params.id).then(post => { setSelectedPost(post) })
    }, [params.id])

    if (!selectedPost.image) {
        return (
            <LoadSpinner />
        )
    }
    const goHome = () => navigate('/')

    
    return (<section>
        <div className={styles.nav}>
            <a href="#!" style={theme} className={styles.link} onClick={goHome}>Home</a>
            <p className={styles.postid}>Post: {params.id}</p>
        </div>
        <div className={styles.selectedPost}>
            <div className={styles.post}>
                <p style={theme} className={styles.title}>{selectedPost.title} </p>
                <img className={styles.image} src={selectedPost.image} alt='123'></img>
                <p style={theme} className={styles.text}>{selectedPost.text}</p>
                <PostButtons />
            </div>
            <SelectedPostNav />
        </div>

    </section>)
}