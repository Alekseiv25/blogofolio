import { useState } from "react"
import { getAllPosts } from "./PostService"
import { IPost } from './PostService'
import style from "./PostList.module.scss"
import { Buttons } from "./Buttons/Buttons"




export const PostList = () => {
    const [posts, setPosts] = useState<IPost[]>([])


    getAllPosts(10).then(data => {
        setPosts(data)
        console.log(data);
    })

    if (!posts.length) {
        return (
            <svg className={style.spinner} viewBox="0 0 50 50">
                <circle className={style.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>)
    }

    return (
        <div className={style.posts}>
            {
                posts.map((posts) => (
                    <>
                        <div className={style.post}>
                            <div>
                                <div className={style.titlewrapper}>
                                    <p className={style.date}>{posts.date}</p>
                                    <p className={style.title}>{posts.title} </p>
                                    <p className={style.text}>{posts.text}</p>
                                </div>
                            </div>
                            <img className={style.image} src={posts.image} alt='123'></img>
                            <Buttons />
                        </div>
                    </>))}
        </div>)
}