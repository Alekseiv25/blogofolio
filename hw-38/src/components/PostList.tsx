import { useState } from "react"
import { getAllPosts } from "./PostService"
import { IPost } from './PostService'
import style from "./PostList.module.scss"




export const PostList = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    getAllPosts(10).then(data => {
        setPosts(data)
        console.log(data);


    })

    if (!posts.length) {
        return (
            <div className={style.posts}>
                Loading...
            </div>)
    }

    return (
        <div className={style.posts}>
            {
                posts.map((posts) => (
                    <>
                        <div key={posts.id} className={style.post}>
                            <div>
                                <p className={style.date}>{posts.date}</p>
                                <p key={posts.id} className={style.title}>{posts.title} </p>
                                <p key={posts.id} className={style.text}>{posts.text}</p>
                            </div>
                            <img key={posts.id} className={style.image} width='100' height='100' src={posts.image} alt='123'></img>
                        </div>
                    </>))}
        </div>)
}