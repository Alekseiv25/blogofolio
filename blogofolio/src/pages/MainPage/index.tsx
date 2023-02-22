import { Navigation } from "../../components/Navigaton"
import { Tabs } from "../../components/Tabs"
import PostList from "../../components/PostList"
import { useSelector } from "react-redux"
import { AppState } from "../../store/store"
import MyFavoritesList from "../../components/PostList/MyFavoritesList"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadPostListAsyncAction, loadTotalPostsCountAsyncAction } from "../../store/reducers/postListReducer/postListAction"
import { LoadSpinner } from "../../components/loadSpinner"
const activeTabSelector = (state: AppState) => state.tabs.activeTab;
export const Main = () => {
    let activeTab = useSelector(activeTabSelector);
    const posts = useSelector((state: AppState) => state.postList.posts);
    const total = useSelector((state: AppState) => state.postList.totalPostsCount)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadTotalPostsCountAsyncAction())
    }, [dispatch])


    useEffect(() => {
        dispatch(loadPostListAsyncAction(total, 0))
    }, [dispatch, total])

    if (!posts.length) {
        return <LoadSpinner />
    }

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs activeTab1={activeTab} />
            {activeTab === 'All' && <PostList />}
            {activeTab === 'My favorites' && <MyFavoritesList />}
        </section>
    )
}
