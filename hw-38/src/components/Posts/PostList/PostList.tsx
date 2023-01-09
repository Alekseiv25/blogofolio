import { useState } from "react"
import { getAllPosts, IPost } from '../PostService'
import style from "./PostList.module.scss"
import { PostItem } from "./PostItem/PostItem"

export interface IRes {
    count: number
    results: IPost[]
}


export const PostList = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    getAllPosts().then((post) => { setPosts(post) })

    if (!posts.length) {
        return (
            <svg className={style.spinner} viewBox="0 0 50 50">
                <circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>)
    }

    return (
        <div className={style.posts}>
            {posts.map((el) => (
                <PostItem key={el.id} user={el} id={0} image={""} text={""} lesson_num={0} title={""} date={0} />
            ))
            }
        </div>)
}