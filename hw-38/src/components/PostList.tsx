import { useState, useEffect } from "react"
import { getAllPosts } from "./PostService"
import { IPost } from './PostService'
import style from "./PostList.module.scss"
import { PostItem } from "./PostItem"




export const PostList = () => {
    const [posts, setPosts] = useState<IPost[]>([])


    getAllPosts(10).then(data => {
        setPosts(data)
        console.log(data);
    })

    if (!posts.length) {
        return (
            <svg className={style.spinner} viewBox="0 0 50 50">
                <circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>)
    }

    return (
        <div className={style.posts}>
            {posts.map((el) => (
                <PostItem key={el.id} user={el} />
            ))
            }
        </div>)
}