import { useEffect } from "react"
import {  IPost } from "../../services/PostService"
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
        const loadPostsListAsync = () => {
            dispatch(loadPostListAsyncAction(11, 0));
        };
        loadPostsListAsync();


    }, [dispatch]);



    if (!posts.length) {
        return (
            <LoadSpinner />
        )
    }

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs />
            <PostList mainPost={posts.slice(0, 1)} bottomPost={posts.slice(1, 5)} asidePost={posts.slice(5, 11)} />
            <PagesNav number={1} number2={2} number3={3} number4={6} />
        </section>
    )
}