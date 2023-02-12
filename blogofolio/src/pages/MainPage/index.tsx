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
        dispatch(loadPostListAsyncAction(66, 0));
    }, [dispatch]);



    if (!posts.length) {
        return (
            <LoadSpinner />
        )
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const previousPage = () => {
        if (currentPage === 1) {
            return
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }




    const lastPostIndex = currentPage /*1*/ * postsPerPage /*11*/
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPost = posts.slice(firstPostIndex + 1, lastPostIndex - 6)

    const mainPostExample = posts.slice(firstPostIndex, lastPostIndex === 11 ? 1 : firstPostIndex + 1)

    const asidePostExample = posts.slice(firstPostIndex + 5, lastPostIndex)

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs />
            <PostList mainPost={mainPostExample} bottomPost={currentPost} asidePost={asidePostExample} />
            <PagesNav previousPage={previousPage} nextPage={nextPage} setCurrentPage={setCurrentPage} totalPosts={posts.length} postsPerPage={postsPerPage} />
        </section>
    )
}

// posts.slice(1, 5)