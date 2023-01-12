import { useState } from "react"
import { PagesNav } from "../PostList/PagesNav/PagesNav"
import { PostButtons } from "../PostList/PostButtons/PostButtons"
import { getAllPosts, IPost } from "../Services/PostService"
import styles from './SelectedPost.module.scss'
import { SelectedPostNav } from "./SelectedPostNav/SelectedPostNav"

export const SelectedPost = () => {
    const [selectedPost, setSelectedPost] = useState<IPost[]>([])

    if (!selectedPost.length) {
        getAllPosts(1, 0).then((post) => { setSelectedPost(post) })
    }


    return (<section>
        <div className={styles.selectedPost}>
            {selectedPost.map((el) => (
                <div className={styles.post}>
                    <p className={styles.title}>{el.title} </p>
                    <img className={styles.image} src={el.image} alt='123'></img>
                    <p className={styles.text}>{el.text}</p>
                    <PostButtons />
                </div>
            ))}
            <SelectedPostNav />
        </div>

    </section>)
}