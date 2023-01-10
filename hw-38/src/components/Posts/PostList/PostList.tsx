import { useState } from "react"
import { getAllPosts, IPost } from '../PostService'
import style from "./PostList.module.scss"
import { MainPostItem } from "./PostItems/MainPostItem/PostItem"
import { BottomPostItem } from "./PostItems/BottomPostItem/BottomPostItem"
import { AsidePostItem } from "./PostItems/AsidePostItem/AsidePostItem"


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
            <div className={style.leftPosts}>
                <div className={style.mainPost}>
                    {posts.slice(0, 1).map((el) => (
                        <MainPostItem key={el.id} image={el.image} text={el.text} date={el.date} title={el.title}  />
                    ))
                    }
                </div>
                <div className={style.bottomPosts}>
                    {posts.slice(2, 6).map((el) => (
                        <BottomPostItem key={el.id} image={el.image} text={el.text} date={el.date}  title={el.title} />
                    ))}
                </div></div>
            <aside className={style.asidePosts}>
                {posts.slice(7, 12).map((el) => (
                    <AsidePostItem key={el.id} image={el.image} text={el.text} date={el.date}  title={el.title} />
                ))}
            </aside>
        </div>


    )
}