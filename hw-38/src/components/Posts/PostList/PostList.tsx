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
    const [mainPost, setMainPost] = useState<IPost[]>([])
    const [bottomPost, setBottomPost] = useState<IPost[]>([])
    const [asidePost, setAsidePost] = useState<IPost[]>([])

    if (!mainPost.length) {
        getAllPosts(1, 0).then((post) => { setMainPost(post) })
        getAllPosts(4, 1).then((post) => { setBottomPost(post) })
        getAllPosts(5, 5).then((post) => { setAsidePost(post) })
    }

    if (!mainPost.length) {
        return (
            <svg className={style.spinner} viewBox="0 0 50 50">
                <circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>)
    }

    return (

        <div className={style.posts}>
            <div className={style.leftPosts}>
                <div className={style.mainPost}>
                    {mainPost.map((el) => (
                        <MainPostItem key={el.id} {...el} />
                    ))
                    }
                </div>
                <div className={style.bottomPosts}>
                    {bottomPost.map((el) => (
                        <BottomPostItem key={el.id} {...el} />
                    ))}
                </div></div>
            <aside className={style.asidePosts}>
                {asidePost.map((el) => (
                    <AsidePostItem key={el.id} {...el} />
                ))}
            </aside>
        </div>


    )
}