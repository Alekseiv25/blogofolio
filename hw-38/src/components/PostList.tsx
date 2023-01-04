import { useState } from "react"
import { getAllPosts } from "./PostService"
import { IPost } from './PostService'
import style from "./PostList.module.scss"
import { DislikeButton, FavoriteButton, Appl  } from "./Buttons/Buttons"




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
                        <div className={style.post}>
                            <div>
                                <div className={style.titlewrapper}>
                                    <p className={style.date}>{posts.date}</p>
                                    <p className={style.title}>{posts.title} </p>
                                    <p className={style.text}>{posts.text}</p></div>
                            </div>
                            <img className={style.image} width='100' height='100' src={posts.image} alt='123'></img>
                            <Appl/>
                            {/* <LikeButton /> */}
                            <DislikeButton />
                            <FavoriteButton />
                        </div>
                    </>))}
        </div>)
}