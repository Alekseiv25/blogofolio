import { Navigation } from "../../components/Navigaton"
import { Tabs } from "../../components/Tabs"
import { Pagination } from "../../components/Pagination"
import PostList from "../../components/PostList"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPostListAsyncAction } from "../../store/reducers/postListReducer/postListAction"
import { AppState } from "../../store/store"
import { LoadSpinner } from "../../components/loadSpinner"

export const Main = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: AppState) => state.postList.posts);

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 11

    useEffect(() => {
        dispatch(loadPostListAsyncAction(274, 0))
    }, [dispatch])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;



    const bottomPost = posts.slice(indexOfFirstPost + 1, indexOfLastPost - 6)

    const mainPost = posts.slice(indexOfFirstPost, indexOfLastPost === 11 ? 1 : indexOfFirstPost + 1)

    const asidePost = posts.slice(indexOfFirstPost + 5, indexOfLastPost)

    if (!bottomPost.length) {
        return <LoadSpinner />
    }

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs />
            <PostList mainPost={mainPost} asidePost={asidePost} bottomPost={bottomPost} />
            <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
        </section>
    )
}
