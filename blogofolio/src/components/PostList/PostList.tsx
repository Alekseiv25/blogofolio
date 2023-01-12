import { useState } from "react"
import { getAllPosts, IPost } from "../Services/PostService"
import styles from "./PostList.module.scss"
import { MainPostItem } from './PostItems/MainPostItem/MainPostItem'
import { BottomPostItem } from "./PostItems/BottomPostItem/BottomPostItem"
import { AsidePostItem } from "./PostItems/AsidePostItem/AsidePostItem"
import { Navigation } from "../Navigaton/Navigation"
import { Tabs } from "./Tabs/Tabs"
import { PagesNav } from "./PagesNav/PagesNav"


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
            <svg className={styles.spinner} viewBox="0 0 50 50">
                <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>)
    }

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs />
            <div className={styles.posts}>
                <div className={styles.leftPosts}>
                    <div className={styles.mainPost}>
                        {mainPost.map((el) => (
                            <MainPostItem key={el.id} {...el} />
                        ))
                        }
                    </div>
                    <div className={styles.bottomPosts}>
                        {bottomPost.map((el) => (
                            <BottomPostItem key={el.id} {...el} />
                        ))}
                    </div></div>
                <aside className={styles.asidePosts}>
                    {asidePost.map((el) => (
                        <AsidePostItem key={el.id} {...el} />
                    ))}
                </aside>
            </div>
            <PagesNav number={1} number2={2} number3={3} number4={6} />
        </section>
    )
}