import { Navigation } from "../../components/Navigaton"
import { Tabs } from "../../components/Tabs"
import { Pagination } from "../../components/Pagination"
import PostList from "../../components/PostList"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPostListAsyncAction, loadTotalPostsCountAsyncAction } from "../../store/reducers/postListReducer/postListAction"
import { AppState } from "../../store/store"
import { LoadSpinner } from "../../components/loadSpinner"
import MyFavoritesList from "../../components/PostList/MyFavoritesList"

const activeTabSelector = (state: AppState) => state.tabs.activeTab;

export const Main = () => {
    let activeTab = useSelector(activeTabSelector);
    const dispatch = useDispatch()
    const posts = useSelector((state: AppState) => state.postList.posts);
    const total = useSelector((state: AppState) => state.postList.totalPostsCount)

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 11

    useEffect(() => {
        dispatch(loadTotalPostsCountAsyncAction())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadPostListAsyncAction(total, 0))
    }, [dispatch, total])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;



    const bottomPost = posts.slice(indexOfFirstPost + 1, indexOfLastPost - 6)

    const mainPost = posts.slice(indexOfFirstPost, indexOfLastPost === 11 ? 1 : indexOfFirstPost + 1)

    const asidePost = posts.slice(indexOfFirstPost + 5, indexOfLastPost)

    if (!posts.length) {
        return <LoadSpinner />
    }

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs activeTab1={activeTab} />
            {activeTab === 'All' && <PostList mainPost={mainPost} asidePost={asidePost} bottomPost={bottomPost} />}
            {activeTab === 'My favorites' && <MyFavoritesList />}
            <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
        </section>
    )
}
