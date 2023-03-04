import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPostsAsyncAction } from "../../store/reducers/myPostsReducer/actions";
import { AppState } from "../../store/store";
import PostListView from "./PostListView";

const myPostsSelector = (state: AppState) => state.myPosts.myPosts

const MyPostsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyPostsAsyncAction(100, 0));
    }, [dispatch]);
    const myPosts = useSelector(myPostsSelector);

    return (<PostListView bottomPost={myPosts!} mainPost={[]} asidePost={[]} />)
}
export default MyPostsList