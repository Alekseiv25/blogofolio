import { useEffect, useState } from "react"
import { IPost } from "../../services/PostService"
import { Navigation } from "../../components/Navigaton"
import { Tabs } from "../../components/Tabs"
import { PagesNav } from "../../components/PagesNav"
import { LoadSpinner } from "../../components/loadSpinner"
import PostList from "../../components/PostList"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../store/store"
import { loadPostListAsyncAction } from "../../store/reducers/postListReducer/postListAction"



export interface IRes {
    count: number
    results: IPost[]
}


export const Main = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 11
    const mainPostPage = 1

    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => state.postList.posts);


    // const [mainPost, setMainPost] = useState<IPost[]>([])
    // const [bottomPost, setBottomPost] = useState<IPost[]>([])
    // const [asidePost, setAsidePost] = useState<IPost[]>([])

    // useEffect(() => {
    //     getAllPosts(1, 0).then(post => { setMainPost(post) })
    //     getAllPosts(4, 1).then(post => { setBottomPost(post) })
    //     getAllPosts(5, 5).then(post => { setAsidePost(post) })
    // }, [])

    useEffect(() => {
        dispatch(loadPostListAsyncAction(120, 0));
    }, [dispatch]);



    if (!posts.length) {
        return (
            <LoadSpinner />
        )
    }





    const lastPostIndex = currentPage /*1*/ * postsPerPage /*11*/
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPost = posts.slice(firstPostIndex, lastPostIndex)

    const mainPostExample = posts.slice(firstPostIndex, 1 )

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs />
            <PostList mainPost={mainPostExample} bottomPost={currentPost} asidePost={posts.slice(5, 11)} />
            <PagesNav setCurrentPage={setCurrentPage} totalPosts={posts.length} postsPerPage={postsPerPage} />
        </section>
    )
}

// posts.slice(1, 5)